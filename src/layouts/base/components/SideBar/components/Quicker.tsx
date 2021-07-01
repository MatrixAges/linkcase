import Icons from '@/icons/QuickerItems'
import type { IPropsQuicker } from '../index'

const Index = (props: IPropsQuicker) => {
	const { items } = props

	return (
		<div className='quicker_wrap h_100 border_box flex flex_column'>
			<div className='padding_wrap w_100 border_box'>
				<div className='avatar_wrap w_100 border_box flex align_center transition_normal cursor_point'>
					<img
						className='avatar'
						src={require('@/assets/test_images/avatar.jpg')}
						alt='avatar'
					/>
					<span className='name line_clamp_1'>Wendao</span>
				</div>
			</div>
			<div className='quecker_items w_100 border_box flex flex_column'>
				{items.map((item) => (
					<div
						className='quecker_item w_100 border_box flex align_center transition_normal cursor_point'
						key={item.id}
					>
						<Icons icon={item.icon}></Icons>
						<span className='name'>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
