import { setLocale } from 'umi'
import Sync from '@/store/sync'
import type { TLang } from '@/typings/app'

export const onChangeLanguage = (lang: TLang, by_action?: boolean) => {
	if (by_action) {
		// Sync.set({ lang })
	}

	switch (lang) {
		case 'cn':
			setLocale('zh-CN', false)
			break
		case 'en':
			setLocale('en-US', false)
			break
	}
}
