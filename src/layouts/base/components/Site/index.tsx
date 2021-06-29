import { memo, useState } from 'react'
import { Switch, Case, Default } from 'react-if'
import { useCreation, useSize, useReactive } from 'ahooks'
import { ReactSortable } from 'react-sortablejs'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel } from 'swiper'
import { useReactiveSize, useGetBlockWidth, useChunkData } from './hooks'
import { link_items } from '@/data/mock'
import Wallpaper from './components/Wallpaper'
import Note from './components/Note'
import Site from './components/Site'
import styles from './index.less'
import 'swiper/swiper.less'
import type { SwiperOptions } from 'swiper'

SwiperCore.use([Mousewheel])

import type { ILinkItem } from '@/typings/app'

export interface IReactive {
	size_item: number
	interval: number
}

interface IPropsSite {
	getBlockWidth: (column: number | undefined) => number | undefined
}

export interface IPropsItem extends IPropsSite {
	item: ILinkItem
}

const Index = () => {
	const [s_link_items, setLinkItems] = useState(link_items)
	const reactive = useReactive({ size_item: 160, interval: 10 })
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const getBlockWidth = useGetBlockWidth(reactive)
	const { row, col } = useReactiveSize(width, height, reactive)
	const data = useChunkData(link_items, row, col)

	const props_site: IPropsSite = {
		getBlockWidth
	}

	const props_swiper: SwiperOptions = {
		initialSlide: 1,
		mousewheel: true,
		loop: true,
		noSwipingClass: 'link_item'
	}

	return (
		<Swiper className={styles._local} {...props_swiper}>
			{data.map((items, index) => (
				<SwiperSlide className='swiper_item h_100 border_box' key={index}>
					<ReactSortable
						className='link_items w_100 h_100 transition_normal'
						list={s_link_items}
						setList={setLinkItems}
						animation={300}
						delay={240}
						forceFallback
						group='shared'
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

export default memo(Index)
