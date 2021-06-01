import { memo, useState, useEffect } from 'react'
import { connect } from 'umi'
import styles from './index.less'

const Index = (props: any) => {
	const {
		app: { fold },
		loading = true,
		full
	} = props
	const [visible, setVisible] = useState<boolean>(true)

	useEffect(() => {
		if (loading) {
			setVisible(loading)
		} else {
			const timer = setTimeout(() => setVisible(loading), 300)

			return () => clearTimeout(timer)
		}
	}, [loading])

	return (
		<div
			className={`
                        ${styles._local} 
                        ${visible ? styles.visible : ''} 
                        ${loading ? styles.show : ''} 
                        ${fold ? styles.fold : ''} 
                        ${full ? styles.full : ''}
                  `}
		>
			<div className='wrap'>
				<div className='inner' />
				<div className='text'>loading</div>
			</div>
		</div>
	)
}

export default memo(connect(({ app }: any) => ({ app }))(Index))
