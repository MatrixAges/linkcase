import { memo } from 'react'
import { connect, IRouteComponentProps } from 'umi'
import { ConfigProvider } from 'antd'
import useLang from '@/hooks/use_lang'
import Bg from './components/Bg'
import Backdrop from './components/Backdrop'
import type { IModelApp, ConnectRC } from 'umi'

interface IProps extends IRouteComponentProps {
	page_data: IModelApp
}

const Index: ConnectRC<IProps> = (props) => {
	const { page_data, children } = props
	const { lang } = page_data
	const locale = useLang(lang)

	return (
		<ConfigProvider locale={locale}>
			<Bg></Bg>
			<Backdrop></Backdrop>
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
