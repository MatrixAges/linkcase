import { memo } from 'react'
import { connect, useIntl, Helmet } from 'umi'
import Sites from './components/Site'
import Indi from './components/Indi'
import Bar from './components/Bar'
import Modal from './components/Modal'
import styles from './index.less'
import type { IModelApp, ConnectRC, Dispatch } from 'umi'

interface IProps {
	page_data: IModelApp
}

export interface IPropsModal {
	visible: IModelApp['visible_modal']
	dispatch: Dispatch
}

const Index: ConnectRC<IProps> = (props) => {
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
				<Bar></Bar>
				<Modal {...props_modal}></Modal>
			</div>
		</div>
	)
}

interface IPageData {
	app: IModelApp
}

const getInitialProps = ({ app }: IPageData) => ({
	page_data: app
})

export default memo(connect(getInitialProps)(Index))
