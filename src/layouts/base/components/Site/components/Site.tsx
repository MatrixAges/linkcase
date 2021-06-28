import { memo } from 'react'
import useDisableContextmenu from '@/hooks/use_disable_contextmenu'
import type { ILinkItem } from '@/typings/app'

interface IProps {
	item: ILinkItem
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

export default memo(Index)
