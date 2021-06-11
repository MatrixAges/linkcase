import { memo } from 'react'
import { connect } from 'umi'
import { ConfigProvider } from 'antd'
import useLang from '@/hooks/use_lang'
import Bg from './components/Bg'
import Backdrop from './components/Backdrop'
import Indi from './components/Indi'
import Bar from './components/Bar'
import styles from './index.less'
import type { IModelApp, ConnectRC } from 'umi'

interface IProps {
	page_data: IModelApp
}

const Index: ConnectRC<IProps> = (props) => {
	const { page_data } = props
	const { lang } = page_data
	const locale = useLang(lang)

	return (
		<ConfigProvider locale={locale}>
			<div className={styles._local}>
				<Bg></Bg>
				<Backdrop></Backdrop>
				<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
					<div className='link_items_wrap w_100 border_box'>
						<div className='link_items h_100 flex flex_wrap'></div>
					</div>
					<Indi></Indi>
					<Bar></Bar>
				</div>
			</div>
		</ConfigProvider>
	)
}

interface IPageData {
	app: IModelApp
}

const getInitialProps = ({ app }: IPageData) => ({
	page_data: app
})

export default memo(connect(getInitialProps)(Index))
