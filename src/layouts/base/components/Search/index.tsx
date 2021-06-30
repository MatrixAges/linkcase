import { memo } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<div className='search_wrap h_100 flex justify_center align_center relative'>
				<input
					className='input_search transition_normal'
					type='text'
					placeholder='Input and search'
				/>
				<SearchOutlined className='icon_search absolute transition_normal'></SearchOutlined>
			</div>
		</div>
	)
}

export default memo(Index)
