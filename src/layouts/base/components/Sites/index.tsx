import { useCallback } from 'react'
import { Switch, Case, Default } from 'react-if'
import { ReactSortable } from 'react-sortablejs'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper'
import Wallpaper from './components/Wallpaper'
import Note from './components/Note'
import Site from './components/Site'
import styles from './index.less'
import 'swiper/swiper.less'
import type { SwiperOptions } from 'swiper'
import type { ISite } from '@/typings/app'
import type { IPropsSites } from '../../index'

export interface IPropsSite {
	getBlockWidth: IPropsSites['getBlockWidth']
}

export interface IPropsItem extends IPropsSite {
	item: ISite
}

SwiperCore.use([Mousewheel])

const Index = (props: IPropsSites) => {
	const { data, dispatch, getBlockWidth, setList, getSwiperInstance } = props

	const props_site: IPropsSite = {
		getBlockWidth
	}

	const props_swiper: SwiperOptions = {
		initialSlide: 0,
		mousewheel: true,
		loop: true,
		noSwipingClass: 'link_item'
	}

	const setPage = useCallback(
		(page: number) => {
			if (page === 0) {
				page = data.length
			}

			if (page > data.length) {
				page = 1
			}

			dispatch({
				type: 'app/updateState',
				payload: { page }
			})
		},
		[data]
	)

	const onStart = () => {
		dispatch({
			type: 'app/updateState',
			payload: { dragging: true }
		})
	}

	const onEnd = () => {
		dispatch({
			type: 'app/updateState',
			payload: { dragging: false }
		})
	}

	return (
		<Swiper
			className={styles._local}
			onSlideChange={({ activeIndex }) => setPage(activeIndex)}
			onSwiper={(e) => getSwiperInstance(e)}
			{...props_swiper}
		>
			{data.map((items, index) => (
				<SwiperSlide className='swiper_item h_100 border_box' key={index}>
					<ReactSortable
						className='link_items w_100 h_100 transition_normal'
						list={items}
						setList={(list) => setList(list, index)}
						animation={300}
						delay={240}
						group='shared'
						handle='.link_item'
						forceFallback
						fallbackOnBody
						onStart={onStart}
						onEnd={onEnd}
					>
						{items.map((item) => (
							<Switch key={item.id}>
								<Case condition={item.type === 'wallpaper'}>
									<Wallpaper
										item={item}
										{...props_site}
									></Wallpaper>
								</Case>
								<Case condition={item.type === 'note'}>
									<Note item={item} {...props_site}></Note>
								</Case>
								<Default>
									<Site item={item}></Site>
								</Default>
							</Switch>
						))}
					</ReactSortable>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default window.$app.memo(Index)
