import { setLocale } from 'umi'
import en from 'antd/lib/locale/en_US'
import cn from 'antd/lib/locale/zh_CN'
import Sync from '@/store/sync'
import type { TLang } from '@/typings/app'

export const onChangeLanguage = (lang: TLang, by_action?: boolean) => {
	if (by_action) {
		// Sync.set({ lang })
	}

	switch (lang) {
		case 'cn':
			setLocale('zh-CN', false)

			return cn
			break
		case 'en':
			setLocale('en-US', false)

			return en
			break
	}
}
