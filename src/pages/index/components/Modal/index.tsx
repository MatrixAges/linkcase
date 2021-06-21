import { memo } from 'react'
import { Modal } from 'antd'
import styles from './index.less'
import type { IModelApp } from 'umi'
import type { IPropsModal } from '../../index'

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
				transitionName='ant-zoom-big-fast'
			>
				<div className='modal_wrap w_100 border_box'></div>
			</Modal>
		</div>
	)
}

export default memo(Index)
