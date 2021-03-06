import styles from './index.less'
import type { IPropsBg } from '../../index'

const Index = (props: IPropsBg) => {
	const { domToReady } = props

	const style: React.CSSProperties = {
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	}

	const onLoadImage: React.ReactEventHandler<HTMLImageElement> = (e) => {
		const src = (e.target as HTMLImageElement).getAttribute('src')
		const Bg = document.getElementById('Bg')

		if (!Bg) return

		Bg.style.backgroundImage = `url(${src})`

		domToReady()
	}

	return (
		<div
			id='Bg'
			className={`
                        ${styles._local}
                        absolute top_0 left_0 w_100 h_100 transition_normal bg_white
                  `}
			style={style}
		>
			<img className='none' src='/test_images/lake.png' alt='' onLoad={onLoadImage} />
		</div>
	)
}

export default window.$app.memo(Index)
