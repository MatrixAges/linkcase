import type { IPropsSite } from '../index'

const Index = (props: IPropsSite) => {
	const { sites } = props

	return (
		<div className='site_items_wrap border_box'>
			<div className='site_items border_box flex flex_wrap'>
				{sites.map((item, index) => (
					<div className='site_item_wrap border_box' key={index}>
						<div className='site_item w_100 border_box flex align_center transition_normal'>
							<div className='left border_box flex align_center'>
								<img className='logo' src={item.image} alt='logo' />
								<div className='detail border_box flex flex_column justify_center'>
									<span className='name'>{item.name}</span>
									<span className='desc w_100 line_clamp_1'>
										{item.desc}
									</span>
								</div>
							</div>
							<div className='btn_wrap flex justify_end align_center'>
								<button className='btn_get cursor_point'>
									Get
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
