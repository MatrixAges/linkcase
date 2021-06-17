import { memo } from 'react'
import type { ILinkItem } from '@/@types/app'

interface IProps {
	item: ILinkItem
}

const Index = (props: IProps) => {
	const { item } = props

	return (
		<div
			className='link_item_wrap flex flex_column align_center'
			style={{ visibility: item.draging ? 'hidden' : 'visible' }}
		>
			<a
				className='link_item cursor_point relative'
				target='_blank'
				style={{ backgroundImage: `url(${item.image})` }}
			></a>
			<span className='name line_clamp_1'>{item.name}</span>
		</div>
	)
}

export default memo(Index)
