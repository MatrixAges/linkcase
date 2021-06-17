import { memo, useEffect } from 'react'
import { useReactive } from 'ahooks'
import styles from './index.less'

interface IProps {
	visible: boolean
}

const Index = ({ visible }: IProps) => {
	const reactive = useReactive({
		_opacity: false,
		_display: false
	})

	useEffect(() => {
		if (visible) {
			reactive._opacity = true
			reactive._display = true
		} else {
			reactive._opacity = false

			const timer = setTimeout(() => {
				reactive._display = false
			}, 300)

			return () => clearTimeout(timer)
		}
	}, [visible])

	return (
		<div
			className={`
                        ${styles._local} 
                        ${!reactive._opacity ? styles._opacity : ''}
                        ${!reactive._display ? styles._display : ''}
                        absolute top_0 left_0 w_100 h_100 bg_white
                  `}
		>
			<img className='logo' src='/logo/linkcase@128.png' alt='logo' />
		</div>
	)
}

export default memo(Index)
