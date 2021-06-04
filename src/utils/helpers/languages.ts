import { setLocale } from 'umi'
import moment from 'moment'
import en from 'antd/lib/locale/en_US'
import cn from 'antd/lib/locale/zh_CN'
import type { TLang } from '@/@types/app'

export const onChangeLanguage = (key: TLang) => {
	switch (key) {
		case 'cn':
			moment.locale('zh-cn')
			setLocale('zh-CN', false)

			return cn
			break
		case 'en':
			moment.locale('en')
			setLocale('en-US', false)

			return en
			break
	}
}
