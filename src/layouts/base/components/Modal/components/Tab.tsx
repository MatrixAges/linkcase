import Link from './Link'
import type { IPropsTab } from '../index'

const Index = (props: IPropsTab) => {
	const { pathname, items, update } = props

	const props_link = {
		pathname,
		update
	}

	return (
		<div className='tab_items border_box flex flex_column justify_between'>
			<div className='top w_100 flex flex_column'>
				{items.map(
					(item) =>
						item.name !== 'Setting' && (
							<Link {...props_link} item={item} key={item.id}></Link>
						)
				)}
			</div>
			<div className='bottom w_100 flex flex_column'>
				<Link
					item={{
						id: 4,
						name: 'Setting',
						to: '/setting.html',
						icon: 'SettingOutlined'
					}}
					{...props_link}
				></Link>
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
