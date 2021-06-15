import { memo } from 'react'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<button className='btn_more flex justify_center align_center'>
				<img className='logo' src='/logo/linkcase@128_white.png' alt='logo' />
			</button>
		</div>
	)
}

export default memo(Index)
