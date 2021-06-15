import { memo } from 'react'
import { Helmet } from 'umi'
import styles from './index.less'
import bg from '@/assets/test_images/bg.jpg'

const Index = () => {
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
	}

	return (
		<div
			id='Bg'
			className={`
                        ${styles._local}
                        absolute top_0 left_0 w_100 h_100 transition_normal
                  `}
			style={style}
		>
			<Helmet>
				<link rel='preload' href={bg} as='image' />
			</Helmet>
			<img className='none' src={bg} alt='' onLoad={onLoadImage} />
		</div>
	)
}

export default memo(Index)
