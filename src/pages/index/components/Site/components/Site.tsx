import { memo } from 'react'
import type { ILinkItem } from '@/@types/app'

interface IProps {
	item: ILinkItem
}

const Index = (props: IProps) => {
	const { item } = props

	return (
		<div className='link_item_wrap flex flex_column align_center'>
			<div
				className='link_item relative'
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<span className='name line_clamp_1'>{item.name}</span>
		</div>
	)
}

export default memo(Index)
