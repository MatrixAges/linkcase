import { AppstoreOutlined } from '@ant-design/icons'
import type { IPropsBtnApps } from '../index'

const Index = ({ setStateVisible }: IPropsBtnApps) => (
	<button
		className='btn_apps_wrap cursor_point border_box flex justify_center align_center transition_normal clickable'
		onClickCapture={() => setStateVisible(true)}
	>
		<div className='btn_apps w_100 h_100 border_box flex justify_center align_center transition_normal'>
			<AppstoreOutlined className='icon_apps'></AppstoreOutlined>
		</div>
	</button>
)

export default window.$app.memo(Index)
