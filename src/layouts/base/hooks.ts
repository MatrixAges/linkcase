import { useCallback, useState, useEffect } from 'react'
import { useDebounceEffect, useCreation, useSize, useReactive } from 'ahooks'
import { chunk, uniq, find, cloneDeep } from 'lodash-es'
import { blockToItems } from './helper'
import type { ISite } from '@/typings/app'
import type { IReactive } from './index'

export const useReactiveSize = () => {
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const r = useReactive<IReactive>({ size_item: 160, interval: 10, row: 0, col: 0 })

	useDebounceEffect(
		() => {
			if (!width) return
			if (!height) return

			let padding = 0.12 * height - 0.04 * width
			r.row = 3
			r.col = 7

			if (width <= 1024) {
				padding = 0.1 * height - 0.05 * width
				r.row = 5
				r.col = 6

				if (height >= 768) {
					padding = 0.08 * height - 0.036 * width
					r.row = 4
					r.col = 6
				}

				if (width <= 768 && height >= 1024) {
					padding = 0.08 * height - 0.054 * width
					r.row = 5
					r.col = 5
				}
			}

			const size_row = (height - 0.12 * 2 * width) / r.row - 0.015
			const size_column = (width - 0.12 * 2 * width) / r.col - 0.015
			const size_item = size_row - padding * 2 - 25

			r.size_item = size_item
			r.interval = (size_column - size_item) / 2
		},
		[width, height],
		{ leading: true, wait: 100 }
	)

	return r
}

export const useGetBlockWidth = (reactive: IReactive) => {
	return useCallback(
		(column: number | undefined) => {
			if (!column) return

			return reactive.size_item * column + reactive.interval * 2 * (column - 1)
		},
		[reactive.size_item, reactive.interval]
	)
}

export const useData = (data: Array<Array<ISite>>, reactive: IReactive) => {
	const [state, setState] = useState<Array<Array<ISite | undefined>>>([[]])
	const count = reactive.row * reactive.col

	useEffect(() => {
		setState(data)
	}, [data])

	useDebounceEffect(
		() => {
			if (!count) return

			let overflow = false

			for (const item of state) {
				if (item.length > count) overflow = true
			}

			if (!overflow) return

			setState(blockToItems(state, count))
		},
		[state, count],
		{ wait: 300 }
	)

	const setList = useCallback(
		(list: Array<ISite>, index: number) => {
			const _data = cloneDeep(state)

			_data[index] = list

			setState(_data)
		},
		[state]
	)

	return { data: state, setList }
}
