import { ConfigProvider, Button, DatePicker } from 'antd'
import moment from 'moment'
import en from 'antd/lib/locale/en_US'

moment.locale('en')

import styles from './index.less'

const Index = () => {
	return (
		<ConfigProvider locale={en}>
			<div
				className={`
                              ${styles._local}
                              flex flex_column
                        `}
			>
				<div className='title_wrap'>
					<span className='title'>添加为书签</span>
				</div>
				<Button type='primary' size='large'>
					确定
				</Button>
				<DatePicker></DatePicker>
			</div>
		</ConfigProvider>
	)
}

export default Index
