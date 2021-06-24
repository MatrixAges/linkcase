import { memo } from 'react'
import { useIntl, Helmet } from 'umi'
import Sites from './components/Site'
import Indi from './components/Indi'
import SideBar from './components/SideBar'
import Modal from './components/Modal'
import styles from './index.less'
import type { IModelApp, Dispatch } from 'umi'

interface IProps {
	page_data: IModelApp
	dispatch: Dispatch
}

export interface IPropsModal {
	visible: IModelApp['visible_modal']
	dispatch: Dispatch
}

const Index = (props: IProps) => {
	const { page_data, dispatch } = props
	const { visible_modal } = page_data
	const intl = useIntl()

	const props_modal = {
		visible: visible_modal,
		dispatch
	}

	return (
		<div className={styles._local}>
			<Helmet>
				<title>{intl.formatMessage({ id: 'title' })}</title>
			</Helmet>
			<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
				<Sites></Sites>
				<Indi></Indi>
				<SideBar></SideBar>
				<Modal {...props_modal}></Modal>
			</div>
		</div>
	)
}

export default memo(Index)
