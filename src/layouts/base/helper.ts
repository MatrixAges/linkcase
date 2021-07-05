import { flatten, chunk, uniqWith, find, filter } from 'lodash-es'
import equal from 'fast-deep-equal'
import type { ISite } from '@/typings/app'

export const blockToItems = (data: Array<Array<ISite | undefined>>, count: number) => {
	const block_data: Array<ISite> = []
	const restore_data: Array<Array<ISite | undefined>> = []

	data.map((item) => {
		item.map((it, idx) => {
			if (!it) return

			if (it.type && it.column && it.row) {
				const split_item = Array(it.column * it.row - 1).fill({ block_id: it.id })

				block_data.push(it)

				item[idx] = { block_id: it.id }
				item.splice(idx + 1, 0, ...split_item)
			}
		})
	})

	data.map((item) => {
		if (item.length < count) {
			Array(count)
				.fill(undefined)
				.map((i, idx) => {
					if (!item[idx]) item[idx] = i
				})
		}
	})

	chunk(flatten(data), count).map((item) => {
		restore_data.push(filter(uniqWith(item, equal), (i) => i !== undefined))
	})

	restore_data.map((item) => {
		item.map((it, idx, arr) => {
			if (!it) return

			if (it.block_id !== undefined) {
				arr[idx] = find(block_data, (x) => x.id === it.block_id) as ISite
			}
		})
	})

	return filter(restore_data, (i) => i.length) as Array<Array<ISite | undefined>>
}
