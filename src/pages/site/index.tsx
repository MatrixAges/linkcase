import { memo } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { site_category } from '@/data/options'
import { site_items } from '@/data/mock'
import Icons from '@/icons/SiteCategory'
import Page from '@/components/Page'
import styles from './index.less'

const Index = () => {
	return (
		<Page className={styles._local}>
			<div className='site_category_wrap h_100 border_box'>
				<div className='search_wrap w_100 border_box flex align_center relative'>
					<input
						className='input_search w_100 border_box transition_normal'
						type='text'
						placeholder='search in all apps'
					/>
					<SearchOutlined className='icon_search absolute transition_normal'></SearchOutlined>
				</div>
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
			<div className='site_items_wrap border_box'>
				<div className='site_items border_box flex flex_wrap'>
					{site_items.map((item, index) => (
						<div className='site_item_wrap border_box' key={index}>
							<div className='site_item w_100 border_box flex align_center transition_normal'>
								<div className='left border_box flex align_center'>
									<img
										className='logo'
										src={item.image}
										alt='logo'
									/>
									<div className='detail border_box flex flex_column justify_center'>
										<span className='name'>
											{item.name}
										</span>
										<span className='desc w_100 line_clamp_1'>
											{item.desc}
										</span>
									</div>
								</div>
								<div className='btn_wrap flex justify_end align_center'>
									<button className='btn_get cursor_point'>
										Get
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Page>
	)
}

export default memo(Index)
