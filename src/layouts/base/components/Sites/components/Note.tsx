import useDisableContextmenu from '@/hooks/use_disable_contextmenu'
import type { ILinkItem } from '@/typings/app'

interface IProps {
	item: ILinkItem
	getBlockWidth: (column: number | undefined) => number | undefined
}

const Index = (props: IProps) => {
	const { item, getBlockWidth } = props
	const ref = useDisableContextmenu()

	return (
		<div
			className='link_item_wrap block note flex flex_column align_center'
			style={{
				gridRow: `span ${item.row}`,
				gridColumn: `span ${item.column}`
			}}
		>
			<div
				className='link_item relative bg_white'
				style={{ width: getBlockWidth(item.column) }}
				ref={ref}
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

export default window.$app.memo(Index)
