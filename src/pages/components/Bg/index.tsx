import { memo } from 'react'
import styles from './index.less'

const Index = () => {
	const style: React.CSSProperties = {
		backgroundImage: `url(${require('@/assets/test_images/bg.jpg')})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<div
			className={`${styles._local} absolute top_0 left_0 w_100 h_100`}
			style={style}
		></div>
	)
}

export default memo(Index)
