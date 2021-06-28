import { useState, useEffect, useRef } from 'react'

export const useRightMouse = (width: number | undefined, height: number | undefined) => {
	const ref = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		window.oncontextmenu = (e) => {
			e.preventDefault()

			if (!ref.current) return
			if (!width) return
			if (!height) return

			const menu = ref.current

			if (e.clientX + 144 < width) {
				menu.style.left = e.clientX + 'px'
			} else {
				menu.style.left = width - 144 + 'px'
			}

			if (e.clientY + 240 < height) {
				menu.style.top = e.clientY + 'px'
			} else {
				menu.style.top = height - 240 + 'px'
			}

			setVisible(true)
		}
	}, [width, height])

	return {
		ref,
		visible,
		setVisible
	}
}
