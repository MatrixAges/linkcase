import { memo } from 'react'
import { connect } from 'umi'
import Links from './components/Links'
import Indi from './components/Indi'
import Bar from './components/Bar'
import Modal from './components/Modal'
import styles from './index.less'
import type { IModelApp, ConnectRC } from 'umi'

interface IProps {
	page_data: IModelApp
}

const Index: ConnectRC<IProps> = (props) => {
	const { page_data } = props

	return (
		<div className={styles._local}>
			<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
				<Links></Links>
				<Indi></Indi>
				<Bar></Bar>
				<Modal></Modal>
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
