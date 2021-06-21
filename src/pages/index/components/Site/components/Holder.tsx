import { memo } from 'react'

const Index = () => {
	return (
		<div className='link_item_wrap holder flex flex_column align_center'>
			<div className='link_item relative'></div>
			<span className='name line_clamp_1'>holder</span>
		</div>
	)
}

export default memo(Index)
