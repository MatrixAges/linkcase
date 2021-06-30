import { useCallback, useState, useEffect } from 'react'
import { useDebounceEffect, useReactive } from 'ahooks'
import { chunk, uniq, find, cloneDeep } from 'lodash-es'
import type { IReactive } from './index'
import type { ILinkItem } from '@/typings/app'

export const useReactiveSize = (
	width: number | undefined,
	height: number | undefined,
	reactive: IReactive
) => {
	const r = useReactive({ row: 0, col: 0 })

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

			reactive.size_item = size_item
			reactive.interval = (size_column - size_item) / 2
		},
		[width, height],
		{ leading: true, wait: 100 }
	)

	return { row: r.row, col: r.col }
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

export const useChunkData = (
	data: Array<ILinkItem>,
	row: number | undefined,
	col: number | undefined
) => {
	const [chunk_data, setChunkData] = useState<Array<Array<ILinkItem>>>([])

	useEffect(() => {
		if (!row) return
		if (!col) return

		const block_data: Array<ILinkItem> = []
		const handled_data: Array<ILinkItem> = []
		const restore_data: Array<Array<ILinkItem>> = []

		// transform block as site item
		data.map((item) => {
			if (item.type && item.column && item.row) {
				const split_item = Array(item.column * item.row).fill({ block_id: item.id })

				block_data.push(item)
				handled_data.push(...split_item)
			} else {
				handled_data.push(item)
			}
		})

		// chunk transformed data
		chunk(handled_data, row * col).map((item) => {
			restore_data.push(uniq(item))
		})

		// restore transforming block to block
		restore_data.map((item) => {
			item.map((it, idx, arr) => {
				if (it.block_id !== undefined) {
					arr[idx] = find(block_data, (x) => x.id === it.block_id) as ILinkItem
				}
			})
		})

		setChunkData(restore_data)
	}, [data, row, col])

	const setList = useCallback(
		(source_data: Array<Array<ILinkItem>>, list: Array<ILinkItem>, index: number) => {
			const _data = cloneDeep(source_data)

			_data[index] = list

			setChunkData(_data)
		},
		[]
	)

	return { data: chunk_data, setData: setChunkData, setList }
}
