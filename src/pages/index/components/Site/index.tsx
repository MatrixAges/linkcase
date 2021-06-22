import { memo, useState } from 'react'
import { Switch, Case, Default } from 'react-if'
import { useCreation, useSize, useReactive } from 'ahooks'
import { ReactSortable } from 'react-sortablejs'
import { useReactiveSize, useGetBlockWidth } from './hooks'
import { link_items } from '@/data'
import Wallpaper from './components/Wallpaper'
import Note from './components/Note'
import Site from './components/Site'
import styles from './index.less'
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

	useReactiveSize(width, height, reactive)

	const props_site: IPropsSite = {
		getBlockWidth
	}

	return (
		<div className={styles._local}>
			<ReactSortable
				className='link_items h_100 transition_normal'
				list={s_link_items}
				setList={setLinkItems}
				animation={300}
				delay={120}
				forceFallback
			>
				{s_link_items.map((item) => (
					<Switch key={item.id}>
						<Case condition={item.type === 'wallpaper'}>
							<Wallpaper item={item} {...props_site}></Wallpaper>
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
		</div>
	)
}

export default memo(Index)
