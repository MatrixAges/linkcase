import { useState } from 'react'
import { AppstoreOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import Modal from '@/components/Modal'
import { bar_items_normal, bar_items_recent } from '@/data/mock'
import { quicker_items } from '@/data/layout'
import Icons from '@/icons/QuickerItems'
import styles from './index.less'
import type { ILinkItem } from '@/typings/app'

const Item = window.$app.memo(({ image, name }: ILinkItem) => (
	<button className='bar_item_normal bar_item flex align_center cursor_point clickable'>
		<img className='logo' src={image} alt='logo' />
		<span className='name white line_clamp_1'>{name}</span>
	</button>
))

const Index = () => {
	const [s_visible, setStateVisible] = useState(false)

	return (
		<div className={styles._local}>
			<button
				className='btn_apps_wrap cursor_point border_box flex justify_center align_center transition_normal clickable'
				onClickCapture={() => setStateVisible(true)}
			>
				<div className='btn_apps w_100 h_100 border_box flex justify_center align_center transition_normal'>
					<AppstoreOutlined className='icon_apps'></AppstoreOutlined>
				</div>
			</button>
			<Modal
				visible={s_visible}
				onClose={() => setStateVisible(false)}
				position='left'
				maskClosable
			>
				<div className='bar_items_wrap h_100vh flex'>
					<div className='bar_items w_100 h_100 border_box flex flex_column'>
						<div className='scroll_wrap w_100 border_box flex flex_column'>
							<div className='bar_items_normal_wrap items_wrap w_100 border_box flex flex_column'>
								{bar_items_normal.map((item) => (
									<Item {...item} key={item.id}></Item>
								))}
							</div>
							<div className='bar_items_recent_wrap items_wrap w_100 border_box flex flex_column'>
								{bar_items_recent.map((item) => (
									<Item {...item} key={item.id}></Item>
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
								<SearchOutlined className='icon_search absolute transition_normal'></SearchOutlined>
							</div>
						</div>
					</div>
					<div className='quicker_wrap h_100 border_box flex flex_column'>
						<div className='padding_wrap w_100 border_box'>
							<div className='avatar_wrap w_100 border_box flex align_center transition_normal cursor_point'>
								<img
									className='avatar'
									src={require('@/assets/test_images/avatar.jpg')}
									alt='avatar'
								/>
								<span className='name line_clamp_1'>Wendao</span>
							</div>
						</div>
						<div className='quecker_items w_100 border_box flex flex_column'>
							{quicker_items.map((item) => (
								<div
									className='quecker_item w_100 border_box flex align_center transition_normal cursor_point'
									key={item.id}
								>
									<Icons icon={item.icon}></Icons>
									<span className='name'>{item.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default window.$app.memo(Index)
