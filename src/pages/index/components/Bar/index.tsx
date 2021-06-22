import { memo } from 'react'
import { AppstoreOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import { bar_items_normal, bar_items_recent } from '@/data'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<div className='mask w_100vw h_100vh fixed top_0 left_0'></div>
			<div className='bar_items_wrap h_100 fixed top_0 left_0 flex'>
				<div className='bar_items w_100 h_100 border_box flex flex_column'>
					<div className='scroll_wrap w_100 border_box flex flex_column'>
						<div className='bar_items_normal_wrap items_wrap w_100 border_box flex flex_column'>
							{bar_items_normal.map((item) => (
								<button
									className='bar_item_normal bar_item flex align_center cursor_point clickable'
									key={item.id}
								>
									<img
										className='logo'
										src={item.image}
										alt='logo'
									/>
									<span className='name white line_clamp_1'>
										{item.name}
									</span>
								</button>
							))}
						</div>
						<div className='bar_items_recent_wrap items_wrap w_100 border_box flex flex_column'>
							{bar_items_recent.map((item) => (
								<button
									className='bar_item_recent bar_item flex align_center cursor_point clickable'
									key={item.id}
								>
									<img
										className='logo'
										src={item.image}
										alt='logo'
									/>
									<span className='name white line_clamp_1'>
										{item.name}
									</span>
								</button>
							))}
						</div>
					</div>
					<div className='options_wrap w_100 border_box flex flex_column justify_between'>
						<button className='btn_all w_100 border_box flex justify_between align_center cursor_point transition_normal clickable'>
							<div className='left flex align_center'>
								<AppstoreOutlined></AppstoreOutlined>
								<span className='text'>Show all apps</span>
							</div>
							<RightOutlined className='icon_right'></RightOutlined>
						</button>
						<div className='search_wrap w_100 border_box flex align_center relative'>
							<input
								className='input_search w_100 transition_normal'
								type='text'
								placeholder='search in your apps'
							/>
							<SearchOutlined className='icon_search absolute'></SearchOutlined>
						</div>
					</div>
				</div>
				<div className='link_items h_100 border_box flex flex_column'></div>
			</div>
		</div>
	)
}

export default memo(Index)
