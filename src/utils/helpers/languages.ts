import { setLocale } from 'umi'
import moment from 'moment'

export const onChangeLanguage = (e: any) => {
	const { key } = e.target.dataset

	if (!key) return

	switch (key) {
		case 'cn':
			moment.locale('zh-cn')
			setLocale('zh-CN', false)
			break
		case 'en':
			moment.locale('en')
			setLocale('en-US', false)
			break
	}
}
