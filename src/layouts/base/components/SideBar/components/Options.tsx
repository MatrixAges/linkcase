import { AppstoreOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'

const Index = () => {
	return (
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
	)
}

export default window.$app.memo(Index)
