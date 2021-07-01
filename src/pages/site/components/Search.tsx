import { SearchOutlined } from '@ant-design/icons'

const Index = () => {
	return (
		<div className='search_wrap w_100 border_box flex align_center relative'>
			<input
				className='input_search w_100 border_box transition_normal'
				type='text'
				placeholder='search in all apps'
			/>
			<SearchOutlined className='icon_search absolute transition_normal'></SearchOutlined>
		</div>
	)
}

export default window.$app.memo(Index)
