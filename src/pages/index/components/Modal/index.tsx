import { memo } from 'react'
import Modal from '@/components/Modal'
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
				className='btn_more_wrap cursor_point border_box flex justify_center align_center transition_normal clickable'
				onClick={() => onChangeVisible(true)}
			>
				<div className='btn_more w_100 h_100 border_box flex justify_center align_center transition_normal'>
					<img className='logo' src='/logo/linkcase@128_white.png' alt='logo' />
				</div>
			</button>
			<Modal visible={visible} onClose={() => onChangeVisible(false)} maskClosable>
				<div className='modal_wrap w_100 border_box'>
					{/* <Tabs defaultActiveKey='0' centered animated>
						<TabPane tab='Site' key='0'></TabPane>
						<TabPane tab='Link' key='1'></TabPane>
						<TabPane tab='Wallpaper' key='2'></TabPane>
						<TabPane tab='Account' key='3'></TabPane>
						<TabPane tab='Setting' key='4'></TabPane>
						<TabPane tab='About' key='5'></TabPane>
					</Tabs> */}
				</div>
			</Modal>
		</div>
	)
}

export default memo(Index)
