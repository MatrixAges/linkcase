import { useRef, useEffect } from 'react'

const Index = (callback?: () => void) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!ref.current) return

		ref.current.addEventListener('contextmenu', (e) => {
			e.preventDefault()
			e.stopPropagation()

			if (callback) callback()
		})
	}, [])

	return ref
}

export default Index
