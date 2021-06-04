import { useState, useEffect } from 'react'
import { onChangeLanguage } from '@/utils/helpers/languages'
import en from 'antd/lib/locale/en_US'
import type { TLang } from '@/@types/app'

const Index = (lang: TLang) => {
	const [s_locale, setLocale] = useState(en)

	useEffect(() => {
		const locale = onChangeLanguage(lang)

		setLocale(locale)
	}, [lang])

	return s_locale
}

export default Index
