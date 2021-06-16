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

			let padding = 0.05 * height - 20

			if (width <= 1024) {
				if (height >= 1366) {
					padding = 0.05 * height
				}
			}

			if (width <= 768) {
				padding = 0.05 * height - 6
			}

			const size_item =
				(height - 0.036 * width - 24 - 36 - 80) / 5 - padding * 2 - 25 - 0.015

			reactive.size_item = size_item
			reactive.interval = ((width - 0.024 * 2 * width) / 9 - 0.015 - size_item) / 2
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
