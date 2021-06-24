import { memo } from 'react'
import { Link, useHistory } from 'umi'
import Modal from '@/components/Modal'
import { tab_items } from '@/data/options'
import styles from './index.less'
import type { IModelApp } from 'umi'
import type { IPropsModal } from '../../index'

const Index = (props: IPropsModal) => {
	const { visible, dispatch } = props
	const history = useHistory()

	const onChangeVisible = (v: boolean) => {
		dispatch({
			type: 'app/updateState',
			payload: { visible_modal: v } as IModelApp
		})
	}

	const onClose = () => {
		onChangeVisible(false)

		history.push('/options.html')
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
			<Modal visible={visible} onClose={onClose} maskClosable>
				<div className='modal_wrap w_100 border_box'>
					<div className='tab_items w_100 border_box flex justify_center align_center'>
						{tab_items.map((item) => (
							<Link
								className='tab_item'
								to={`/${item.to}`}
								key={item.id}
							>
								<span className='name'>{item.name}</span>
							</Link>
						))}
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default memo(Index)
