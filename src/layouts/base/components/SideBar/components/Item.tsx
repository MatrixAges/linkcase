import type { ILinkItem } from '@/typings/app'

const Index = ({ image, name }: ILinkItem) => (
	<button className='bar_item_normal bar_item flex align_center cursor_point clickable'>
		<img className='logo' src={image} alt='logo' />
		<span className='name white line_clamp_1'>{name}</span>
	</button>
)

export default window.$app.memo(Index)
