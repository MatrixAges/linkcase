import { useCallback } from 'react'
import { Link, useHistory } from 'umi'
import { useUpdate } from 'ahooks'
import Modal from '@/components/Modal'
import { tab_items } from '@/data/options'
import Icons from '@/icons/TabItems'
import styles from './index.less'
import type { IModelApp } from 'umi'
import type { IPropsModal } from '../../index'

const Index = (props: IPropsModal) => {
	const { visible, dispatch } = props
	const history = useHistory()
	const update = useUpdate()
	const {
		location: { pathname }
	} = history

	const onChangeVisible = useCallback((v: boolean) => {
		dispatch({
			type: 'app/updateState',
			payload: { visible_modal: v } as IModelApp
		})

		if (v) {
			setTimeout(() => {
				history.push('/site.html')

				update()
			}, 300)
		} else {
			history.push('/options.html')

			update()
		}
	}, [])

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
			<Modal
				visible={visible}
				onClose={() => onChangeVisible(false)}
				maskClosable
				maskVisible
			>
				<div className='modal_wrap w_100 border_box'>
					<div className='tab_items border_box flex flex_column justify_between'>
						<div className='top w_100 flex flex_column'>
							{tab_items.map(
								(item) =>
									item.name !== 'Setting' && (
										<Link
											className={`
                                                                        tab_item flex flex_column justify_center align_center
                                                                        ${
													pathname ===
													'/' + item.to
														? 'active'
														: ''
												}
                                                                  `}
											to={`/${item.to}`}
											key={item.id}
											onClick={update}
										>
											<Icons icon={item.icon}></Icons>
										</Link>
									)
							)}
						</div>
						<div className='bottom w_100 flex flex_column'>
							<Link
								className={`
                                                      tab_item flex flex_column justify_center align_center
                                                      ${
										pathname === '/setting.html'
											? 'active'
											: ''
									}
                                                `}
								to='/setting.html'
								onClick={update}
							>
								<Icons icon='SettingOutlined'></Icons>
							</Link>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default window.$app.memo(Index)
