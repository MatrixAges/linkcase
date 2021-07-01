import useDisableContextmenu from '@/hooks/use_disable_contextmenu'
import type { IPropsItem } from '../index'

const Index = (props: IPropsItem) => {
	const { item, getBlockWidth } = props
	const ref = useDisableContextmenu()

	return (
		<div
			className='link_item_wrap block photo flex flex_column align_center'
			style={{
				gridRow: `span ${item.row}`,
				gridColumn: `span ${item.column}`
			}}
		>
			<div
				className='link_item relative'
				style={{
					backgroundImage: `url(${item.data?.[0].src})`,
					width: getBlockWidth(item.column)
				}}
				ref={ref}
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

export default window.$app.memo(Index)
