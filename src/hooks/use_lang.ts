import { useEffect } from 'react'
import { onChangeLanguage } from '@/utils/helpers/languages'
import type { TLang } from '@/typings/app'

const Index = (lang: TLang) => {
	useEffect(() => {
		onChangeLanguage(lang)
	}, [lang])
}

export default Index
