import useDisableContextmenu from '@/hooks/use_disable_contextmenu'
import type { ISite } from '@/typings/app'

interface IProps {
	item: ISite
}

const Index = (props: IProps) => {
	const { item } = props
	const ref = useDisableContextmenu()

	return (
		<div className='link_item_wrap flex flex_column align_center'>
			<div
				className='link_item relative'
				style={{ backgroundImage: `url(${item.image})` }}
				ref={ref}
			></div>
			<span className='name line_clamp_1'>{item.name}</span>
		</div>
	)
}

export default window.$app.memo(Index)
