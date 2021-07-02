import { useState } from 'react'
import { quicker_items } from '@/data/layout'
import Modal from '@/components/Modal'
import BtnApps from './components/BtnApps'
import BarItems from './components/BarItems'
import Options from './components/Options'
import Quicker from './components/Quicker'
import styles from './index.less'
import type { ISite, IQuickerItem } from '@/typings/app'
import type { IPropsSiderbar } from '../../index'

export interface IPropsBtnApps {
	setStateVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsBarItems {
	common: Array<ISite>
	recent: Array<ISite>
}

export interface IPropsQuicker {
	items: Array<IQuickerItem>
}

const Index = (props: IPropsSiderbar) => {
	const {
		history: { common, recent }
	} = props
	const [s_visible, setStateVisible] = useState(false)

	const props_btn_apps: IPropsBtnApps = {
		setStateVisible
	}

	const props_bar_items: IPropsBarItems = {
		common,
		recent
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
