import type { IPropsBtnMore } from '../index'

const Index = (props: IPropsBtnMore) => {
	const { onChangeVisible } = props

	return (
		<button
			className='btn_more_wrap cursor_point border_box flex justify_center align_center transition_normal clickable'
			onClick={() => onChangeVisible(true)}
		>
			<div className='btn_more w_100 h_100 border_box flex justify_center align_center transition_normal'>
				<img className='logo' src='/logo/linkcase@128_white.png' alt='logo' />
			</div>
		</button>
	)
}

export default window.$app.memo(Index)
