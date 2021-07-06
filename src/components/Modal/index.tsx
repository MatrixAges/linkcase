import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './index.less'
import type { CSSProperties } from 'react'

interface IProps {
	children: React.ReactNode
	className?: string
	visible: boolean
	position?: 'center' | 'top' | 'bottom' | 'left' | 'right'
	zIndex?: number
	maskVisible?: boolean
	maskClosable?: boolean
	maskBlur?: boolean
	dialogBlur?: boolean
	centered?: boolean
	style?: CSSProperties
	onClose?: () => void
}

const Index = (props: IProps) => {
	const [s_visible, setVisible] = useState(false)
	const [s_mask_background, setMaskBackground] = useState('rgba(0,0,0,0)')
	const [s_style, setStyle] = useState({})
	const timer = useRef<NodeJS.Timeout>()
	const {
		children,
		className,
		visible,
		position = 'center',
		zIndex = 10,
		maskVisible,
		maskClosable,
		maskBlur,
		dialogBlur,
		centered = true,
		style,
		onClose
	} = props

	const close = useCallback(() => {
		setVisible(false)

		if (onClose) onClose()
	}, [])

	const getPositionStyle = () => {
		return {
			center: {
				show: { opacity: 1, transform: 'scale(1)', transformOrigin: 'center' },
				hide: { opacity: 0, transform: 'scale(0.81)', transformOrigin: 'center' }
			},
			top: {
				show: { transform: 'translateY(0)' },
				hide: { transform: 'translateY(-120%)' }
			},
			bottom: {
				show: { transform: 'translateY(0)' },
				hide: { transform: 'translateY(120%)' }
			},
			left: {
				show: { transform: 'translateX(0)' },
				hide: { transform: 'translateX(-120%)' }
			},
			right: {
				show: { transform: 'translateX(0)' },
				hide: { transform: 'translateX(120%)' }
			}
		}
	}

	useEffect(() => {
		if (visible) {
			setVisible(true)
			setMaskBackground(maskVisible ? 'rgba(0,0,0,0.6)' : 'transparent')
			setStyle(getPositionStyle()[position].show)
		} else {
			setMaskBackground('transparent')
			setStyle(getPositionStyle()[position].hide)

			timer.current = setTimeout(() => {
				setVisible(false)
			}, 300)
		}

		return () => clearTimeout(Number(timer.current))
	}, [visible])

	return (
		<div
			className={styles._local}
			style={{ zIndex, visibility: s_visible ? 'visible' : 'hidden' }}
		>
			<div className={`dialog_wrap ${centered ? '' : 'no_center'}`}>
				<div
					className='mask'
					style={{
						backgroundColor: s_mask_background,
						backdropFilter:
							maskBlur && s_mask_background !== 'transparent'
								? 'blur(30px)'
								: 'none'
					}}
					onClickCapture={maskClosable ? close : undefined}
					onTouchMoveCapture={maskClosable ? close : undefined}
				></div>
				<div
					className={'dialog ' + position + ' ' + className}
					style={{
						...s_style,
						backdropFilter: dialogBlur ? 'blur(30px)' : 'none',
						...style
					}}
				>
					{children}
				</div>
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
