import { Link } from 'umi'
import Icons from '@/icons/TabItems'
import type { IPropsLink } from '../index'

const Index = (props: IPropsLink) => {
	const { item, pathname, update } = props

	return (
		<Link
			className={`
                        tab_item flex flex_column justify_center align_center
                        ${pathname === '/' + item.to ? 'active' : ''}
                  `}
			to={`/${item.to}`}
			key={item.id}
			onClick={update}
		>
			<Icons icon={item.icon}></Icons>
		</Link>
	)
}

export default window.$app.memo(Index)
