import { useCallback } from 'react'
import { useHistory } from 'umi'
import { useUpdate } from 'ahooks'
import { tab_items } from '@/data/options'
import Modal from '@/components/Modal'
import BtnMore from './components/BtnMore'
import Tab from './components/Tab'
import styles from './index.less'
import type { IModelApp } from 'umi'
import type { ITabItem } from '@/typings/app'
import type { IPropsModal } from '../../index'

export interface IPropsBtnMore {
	onChangeVisible: (v: boolean) => void
}

export interface IPropsLink {
	item: ITabItem
	pathname: string
	update: () => void
}

export interface IPropsTab {
	items: Array<ITabItem>
	pathname: string
	update: () => void
}

const Index = (props: IPropsModal) => {
	const { visible, visible_search, dispatch } = props
	const history = useHistory()
	const update = useUpdate()
	const { location } = history

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

	const props_btn_more: IPropsBtnMore = {
		onChangeVisible
	}

	const props_tab: IPropsTab = {
		items: tab_items,
		pathname: location.pathname,
		update
	}

	return (
		<div className={styles._local}>
			{!visible_search && <BtnMore {...props_btn_more}></BtnMore>}
			<Modal
				visible={visible}
				onClose={() => onChangeVisible(false)}
				maskClosable
				maskVisible
			>
				<div className='modal_wrap w_100 border_box'>
					<Tab {...props_tab}></Tab>
				</div>
			</Modal>
		</div>
	)
}

export default window.$app.memo(Index)
