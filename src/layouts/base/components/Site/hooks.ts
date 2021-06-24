import { useCallback } from 'react'
import { useDebounceEffect } from 'ahooks'
import type { IReactive } from './index'

export const useReactiveSize = (
	width: number | undefined,
	height: number | undefined,
	reactive: IReactive
) => {
	useDebounceEffect(
		() => {
			if (!width) return
			if (!height) return

			let padding = 0.08 * height - 0.03 * width
			let link_row = 4
			let link_col = 8

			if (width <= 1024) {
				padding = 0.08 * height - 0.05 * width
				link_row = 5
				link_col = 6

				if (height >= 768) {
					padding = 0.08 * height - 0.036 * width
					link_row = 4
					link_col = 6
				}

				if (width <= 768 && height >= 1024) {
					padding = 0.08 * height - 0.054 * width
					link_row = 5
					link_col = 5
				}
			}

			const size_row = (height - 0.12 * 2 * width) / link_row - 0.015
			const size_column = (width - 0.12 * 2 * width) / link_col - 0.015
			const size_item = size_row - padding * 2 - 25

			reactive.size_item = size_item
			reactive.interval = (size_column - size_item) / 2
		},
		[width, height],
		{ leading: true, wait: 100 }
	)
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
