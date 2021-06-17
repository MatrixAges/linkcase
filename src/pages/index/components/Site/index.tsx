import { memo } from 'react'
import { Switch, Case, Default } from 'react-if'
import { useCreation, useSize, useReactive, useDrag } from 'ahooks'
import { useReactiveSize, useGetBlockWidth } from './hooks'
import { link_items } from '@/data'
import Wallpaper from './components/Wallpaper'
import Note from './components/Note'
import Site from './components/Site'
import styles from './index.less'

export interface IReactive {
	size_item: number
	interval: number
}

const Index = () => {
	const reactive = useReactive({ size_item: 160, interval: 10, drag_index: null })
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const getBlockWidth = useGetBlockWidth(reactive)

	useReactiveSize(width, height, reactive)

	const getDragProps = useDrag({
		onDragStart: (index, e) => {
			requestAnimationFrame(() => {
				reactive.drag_index = index
			})
		},
		onDragEnd: () => (reactive.drag_index = null)
	})

	console.log(reactive.drag_index)

	return (
		<div className={styles._local}>
			<div className='link_items h_100 flex flex_wrap'>
				{link_items.map((item, index) => (
					<Switch key={index}>
						<Case condition={item.type === 'wallpaper'}>
							<Wallpaper
								item={item}
								props_drag={getDragProps(index)}
								draging={reactive.drag_index === index}
								getBlockWidth={getBlockWidth}
							></Wallpaper>
						</Case>
						<Case condition={item.type === 'note'}>
							<Note
								item={item}
								props_drag={getDragProps(index)}
								draging={reactive.drag_index === index}
								getBlockWidth={getBlockWidth}
							></Note>
						</Case>
						<Default>
							<Site item={item}></Site>
						</Default>
					</Switch>
				))}
			</div>
		</div>
	)
}

export default memo(Index)
