import styles from './index.less'

const Index = () => {
	const style: React.CSSProperties = {
		background: 'rgba(0,0,0,0.3)',
		backdropFilter: 'blur(15px)'
	}

	return (
		<div
			className={`${styles._local} absolute top_0 left_0 w_100 h_100`}
			style={style}
		></div>
	)
}

export default window.$app.memo(Index)
