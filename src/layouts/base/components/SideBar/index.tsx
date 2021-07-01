import { useState } from 'react'
import { bar_items_normal, bar_items_recent } from '@/data/mock'
import { quicker_items } from '@/data/layout'
import Modal from '@/components/Modal'
import BtnApps from './components/BtnApps'
import BarItems from './components/BarItems'
import Options from './components/Options'
import Quicker from './components/Quicker'
import styles from './index.less'
import type { ILinkItem, IQuickerItem } from '@/typings/app'

export interface IPropsBtnApps {
	setStateVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsBarItems {
	normal: Array<ILinkItem>
	recent: Array<ILinkItem>
}

export interface IPropsQuicker {
	items: Array<IQuickerItem>
}

const Index = () => {
	const [s_visible, setStateVisible] = useState(false)

	const props_btn_apps: IPropsBtnApps = {
		setStateVisible
	}

	const props_bar_items: IPropsBarItems = {
		normal: bar_items_normal,
		recent: bar_items_recent
	}

	const props_quicker: IPropsQuicker = {
		items: quicker_items
	}

	return (
		<div className={styles._local}>
			<BtnApps {...props_btn_apps}></BtnApps>
			<Modal
				visible={s_visible}
				onClose={() => setStateVisible(false)}
				position='left'
				maskClosable
			>
				<div className='bar_items_wrap h_100vh flex'>
					<div className='bar_items w_100 h_100 border_box flex flex_column'>
						<BarItems {...props_bar_items}></BarItems>
						<Options></Options>
					</div>
					<Quicker {...props_quicker}></Quicker>
				</div>
			</Modal>
		</div>
	)
}

export default window.$app.memo(Index)
