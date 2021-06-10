import { Input, Tooltip } from 'antd'
import { bar_items } from '@/data'
import styles from './index.less'

const Index = () => {
	const style_cover_bg: React.CSSProperties = {
		backgroundImage: `url(${require('@/assets/test_images/bg.jpg')})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	}

	const style_cover_filter: React.CSSProperties = {
		background: 'rgba(0,0,0,0.15)',
		backdropFilter: 'blur(12px)'
	}

	return (
		<div className={styles._local}>
			<div
				className='cover_bg absolute top_0 left_0 w_100 h_100'
				style={style_cover_bg}
			></div>
			<div
				className='cover_filter absolute top_0 left_0 w_100 h_100'
				style={style_cover_filter}
			></div>
			<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
				<div className='search_wrap w_100 flex justify_center align_center'>
					<div className='search border_box flex align_center relative'>
						<Input
							className='input_search'
							placeholder='Input and search'
							bordered={false}
						></Input>
					</div>
				</div>
				<div className='link_items_wrap w_100 border_box'>
					<div className='link_items h_100 flex flex_wrap'></div>
				</div>
				<div className='indicate_items_wrap w_100 border_box'>
					<div className='indicate_items h_100 flex justify_center align_center'>
						<span className='indicate_item transition_normal active'></span>
						<span className='indicate_item transition_normal'></span>
						<span className='indicate_item transition_normal'></span>
						<span className='indicate_item transition_normal'></span>
						<span className='indicate_item transition_normal'></span>
					</div>
				</div>
				<div
					id='bar_items_wrap'
					className='bar_items_wrap w_100 border_box flex justify_center'
				>
					<div className='bar_items h_100 border_box flex justify_center align_center'>
						{bar_items.map((item, index) => (
							<Tooltip
								title={item.name}
								key={index}
								placement='top'
								mouseEnterDelay={0.3}
								mouseLeaveDelay={0}
							>
								<a
									className='bar_item cursor_point transition_normal'
									target='_blank'
									href={item.url}
									style={{
										backgroundImage: `url(${item.image})`
									}}
								></a>
							</Tooltip>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
