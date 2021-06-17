import { memo } from 'react'
import type { ILinkItem, IDrag } from '@/@types/app'

interface IProps {
	item: ILinkItem
	props_drag: IDrag
	draging: boolean
	getBlockWidth: (column: number | undefined) => number | undefined
}

const Index = (props: IProps) => {
	const { item, props_drag, draging, getBlockWidth } = props

	return (
		<div
			className='link_item_wrap block photo flex flex_column align_center'
			{...props_drag}
			style={{
				gridRow: `span ${item.row}`,
				gridColumn: `span ${item.column}`,
				gridRowStart: Number(item.y) + 1,
				gridRowEnd: Number(item.y) + Number(item.row) + 1,
				gridColumnStart: Number(item.x) + 1,
				gridColumnEnd: Number(item.x) + Number(item.column) + 1,
				opacity: draging ? 0 : 1
			}}
		>
			<div
				className='link_item cursor_point relative'
				style={{
					backgroundImage: `url(${item.data?.[0].src})`,
					width: getBlockWidth(item.column)
				}}
			>
				<div className='info_wrap absolute flex flex_column'>
					<span className='desc'>{item.data?.[0].name}</span>
					<span className='date'>{item.data?.[0].date}</span>
				</div>
			</div>
			<span className='name line_clamp_1'>{item.name}</span>
		</div>
	)
}

export default memo(Index)
