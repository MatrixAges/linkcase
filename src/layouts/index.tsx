import { memo, Fragment } from 'react'
import { connect, useHistory, IRouteComponentProps } from 'umi'
import { ConfigProvider } from 'antd'
import useLang from '@/hooks/use_lang'
import Loader from './components/Loader'
import Bg from './components/Bg'
import Backdrop from './components/Backdrop'
import type { IModelApp, ConnectRC } from 'umi'

interface IProps extends IRouteComponentProps {
	page_data: IModelApp
}

export interface IPropsBg {
	domToReady: () => void
}

const Index: ConnectRC<IProps> = (props) => {
	const { dispatch, page_data, children } = props
	const { lang, dom_ready } = page_data
	const locale = useLang(lang)
	const { location } = useHistory()

	const props_bg: IPropsBg = {
		domToReady: () => {
			dispatch({
				type: 'app/updateState',
				payload: { dom_ready: true } as IModelApp
			})
		}
	}

	return (
		<ConfigProvider locale={locale}>
			{location.pathname !== '/index.html' && (
				<Fragment>
					<Loader visible={!dom_ready}></Loader>
					<Bg {...props_bg}></Bg>
					<Backdrop></Backdrop>
				</Fragment>
			)}
			{children}
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
