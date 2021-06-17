import { memo } from 'react'
import type { ILinkItem, IDrag } from '@/@types/app'

interface IProps {
	item: ILinkItem
	props_drag: any
	draging: boolean
	getBlockWidth: (column: number | undefined) => number | undefined
}

const Index = (props: IProps) => {
	const { item, props_drag, draging, getBlockWidth } = props

	return (
		<div
			className='link_item_wrap block note flex flex_column align_center'
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
				className='link_item cursor_point relative bg_white'
				style={{ width: getBlockWidth(item.column) }}
			>
				<div className='note_items w_100 h_100 border_box flex flex_column'>
					{item.data?.map((it, idx) => (
						<div
							className={`
                                                      note_item flex align_center
                                                      ${it.done ? 'done' : ''}
                                                `}
							key={idx}
						>
							<span className='text'>{it.text}</span>
						</div>
					))}
				</div>
			</div>
			<span className='name line_clamp_1'>{item.name}</span>
		</div>
	)
}

export default memo(Index)
