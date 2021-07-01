import { memo as react_memo } from 'react'
import Equal from 'fast-deep-equal'

export const memo = (el: (props: any) => JSX.Element | null) => {
	return react_memo(el, (prev, next) => Equal(prev, next))
}
