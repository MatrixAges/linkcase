import { site_category } from '@/data/options'
import Search from './Search'
import Icons from '@/icons/SiteCategory'

const Index = () => {
	return (
		<div className='site_category_wrap h_100 border_box'>
			<Search></Search>
			<div className='site_category w_100 border_box flex flex_column'>
				{site_category.map((item) => (
					<div
						className={`
                                                category_item w_100 border_box flex align_center transition_normal cursor_point
                                                ${item.id === 0 ? 'active' : ''}
                                          `}
						key={item.id}
					>
						<Icons icon={item.icon}></Icons>
						<span className='name'>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
