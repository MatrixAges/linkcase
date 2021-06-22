import { memo } from 'react'
import { Modal, Tabs } from 'antd'
import styles from './index.less'
import type { IModelApp } from 'umi'
import type { IPropsModal } from '../../index'

const { TabPane } = Tabs

const Index = (props: IPropsModal) => {
	const { visible, dispatch } = props

	const onChangeVisible = (v: boolean) => {
		dispatch({
			type: 'app/updateState',
			payload: { visible_modal: v } as IModelApp
		})
	}

	return (
		<div className={styles._local}>
			<button
				className='btn_more flex justify_center align_center cursor_point clickable'
				onClick={() => onChangeVisible(true)}
			>
				<img className='logo' src='/logo/linkcase@128_white.png' alt='logo' />
			</button>
			<Modal
				visible={visible}
				width={900}
				footer={null}
				closable={false}
				centered
				forceRender
				getContainer={false}
				bodyStyle={{ padding: 0 }}
				onCancel={() => onChangeVisible(false)}
			>
				<div className='modal_wrap w_100 border_box'>
					<Tabs defaultActiveKey='0' centered animated>
						<TabPane tab='Site' key='0'></TabPane>
						<TabPane tab='Link' key='1'></TabPane>
						<TabPane tab='Wallpaper' key='2'></TabPane>
						<TabPane tab='Account' key='3'></TabPane>
						<TabPane tab='Setting' key='4'></TabPane>
						<TabPane tab='About' key='5'></TabPane>
					</Tabs>
				</div>
			</Modal>
		</div>
	)
}

export default memo(Index)
