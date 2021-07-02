import { flatten, chunk, uniq, find, filter } from 'lodash-es'
import type { ISite } from '@/typings/app'

export const blockToItems = (data: Array<Array<ISite | undefined>>, count: number) => {
	const block_data: Array<ISite> = []
	const restore_data: Array<Array<ISite | undefined>> = []

	data.map((item, index) => {
		item.map((it, idx) => {
			if (!it) return

			if (it.type && it.column && it.row) {
				const split_item = Array(it.column * it.row - 1).fill({ block_id: it.id })

				block_data.push(it)
				data[index].push(...split_item)

				item[idx] = { block_id: it.id }
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
		restore_data.push(filter(uniq(item), (i) => i !== undefined))
	})

	// restore_data.map((item) => {
	// 	item.map((it, idx, arr) => {
	// 		if (!it) return

	// 		if (it.block_id !== undefined) {
	// 			arr[idx] = find(block_data, (x) => x.id === it.block_id) as ISite
	// 		}
	// 	})
	// })

	console.log(restore_data)

	return { block_data, data }
}
