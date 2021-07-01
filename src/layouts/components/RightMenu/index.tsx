import { useCreation, useSize, useClickAway } from 'ahooks'
import {
	SearchOutlined,
	EditOutlined,
	EyeOutlined,
	PictureOutlined,
	AppstoreOutlined
} from '@ant-design/icons'
import { useRightMouse } from './hooks'
import styles from './index.less'

const Index = () => {
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const { ref, visible, setVisible } = useRightMouse(width, height)

	useClickAway(() => setVisible(false), ref)

	const onMenuItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}

	return (
		<div className={`${styles._local} ${visible ? styles.visible : ''}`} ref={ref}>
			<div className='menu_items border_box flex flex_column' onClick={onMenuItem}>
				<button className='menu_item flex align_center'>
					<SearchOutlined className='icon'></SearchOutlined>
					<span className='text'>Search</span>
				</button>
				<button className='menu_item flex align_center'>
					<EditOutlined className='icon'></EditOutlined>
					<span className='text'>Edit</span>
				</button>
				<button className='menu_item flex align_center'>
					<EyeOutlined className='icon'></EyeOutlined>
					<span className='text'>Preview</span>
				</button>
				<button className='menu_item flex align_center'>
					<PictureOutlined className='icon'></PictureOutlined>
					<span className='text'>Wallpaper</span>
				</button>
				<div className='divide_line'></div>
				<button className='menu_item flex align_center'>
					<AppstoreOutlined className='icon'></AppstoreOutlined>
					<span className='text'>Apps</span>
				</button>
				<button className='menu_item flex align_center'>
					<div className='logo_wrap flex justify_start align_center'>
						<img
							className='logo'
							src={'/logo/linkcase@128.png'}
							alt='logo'
						/>
					</div>
					<span className='text'>Linkcase</span>
				</button>
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
