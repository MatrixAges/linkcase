import { useEffect } from 'react'
import { cloneDeep } from 'lodash-es'
import type { ILinkItem } from '@/typings/app'

export const useDeactive = (
	s_index: number | undefined,
	s_bar_items: Array<ILinkItem>,
	setBarItems: React.Dispatch<React.SetStateAction<Array<ILinkItem>>>
) => {
	useEffect(() => {
		if (s_index === undefined) return

		const _s_bar_items = cloneDeep(s_bar_items)

		const timer = setTimeout(() => {
			_s_bar_items[s_index].active = false

			setBarItems(_s_bar_items)
		}, 600)

		return () => clearTimeout(timer)
	}, [s_index, s_bar_items])
}
