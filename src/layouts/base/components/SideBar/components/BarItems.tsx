import Item from './Item'
import type { IPropsBarItems } from '../index'

const Index = (props: IPropsBarItems) => {
	const { normal, recent } = props

	return (
		<div className='scroll_wrap w_100 border_box flex flex_column'>
			<div className='bar_items_normal_wrap items_wrap w_100 border_box flex flex_column'>
				{normal.map((item) => (
					<Item {...item} key={item.id}></Item>
				))}
			</div>
			<div className='bar_items_recent_wrap items_wrap w_100 border_box flex flex_column'>
				{recent.map((item) => (
					<Item {...item} key={item.id}></Item>
				))}
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
