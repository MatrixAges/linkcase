import { memo } from 'react'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<div className='indicate_items h_100 flex justify_center align_center'>
				<span className='indicate_item transition_normal active'></span>
				<span className='indicate_item transition_normal'></span>
				<span className='indicate_item transition_normal'></span>
				<span className='indicate_item transition_normal'></span>
				<span className='indicate_item transition_normal'></span>
			</div>
		</div>
	)
}

export default memo(Index)
