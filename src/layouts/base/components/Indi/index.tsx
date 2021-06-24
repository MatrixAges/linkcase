import { memo } from 'react'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<div className='indicate_items h_100 flex justify_center align_center'>
				<button className='indicate_item_wrap transition_normal'>
					<span className='indicate_item active'></span>
				</button>
				<button className='indicate_item_wrap transition_normal'>
					<span className='indicate_item'></span>
				</button>
				<button className='indicate_item_wrap transition_normal'>
					<span className='indicate_item'></span>
				</button>
				<button className='indicate_item_wrap transition_normal'>
					<span className='indicate_item'></span>
				</button>
				<button className='indicate_item_wrap transition_normal'>
					<span className='indicate_item'></span>
				</button>
			</div>
		</div>
	)
}

export default memo(Index)
