import { memo } from 'react'
import { connect } from 'umi'
import { ConfigProvider, Button, DatePicker } from 'antd'
import { onChangeLanguage } from '@/utils/helpers/languages'
import useLang from '@/hooks/use_lang'
import styles from './index.less'
import type { IModelApp, ConnectRC } from 'umi'
import type { TLang } from '@/@types/app'

interface IProps {
	page_data: IModelApp
}

const Index: ConnectRC<IProps> = (props) => {
	const { dispatch, page_data } = props
	const { lang } = page_data
	const locale = useLang(lang)

	const ChangeLanguage = (lang: TLang) => {
		dispatch({
			type: 'app/setLang',
			payload: { lang }
		})

		onChangeLanguage(lang)
	}

	return (
		<ConfigProvider locale={locale}>
			<div
				className={`
                              ${styles._local}
                              flex flex_column
                        `}
			>
				<div className='title_wrap'>
					<span className='title'>添加为书签</span>
				</div>
				<Button type='primary' size='large' onClick={() => ChangeLanguage('cn')}>
					确定
				</Button>
				<DatePicker></DatePicker>
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
