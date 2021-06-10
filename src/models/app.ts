import Sync from '@/store/sync'
import { e_lang, e_lang_umi } from '@/enums'
import { onChangeLanguage } from '@/utils/helpers/languages'
import type { Model } from 'R/src/@types/dva'
import type { TLang } from '@/@types/app'

export interface IModelApp {
	lang: TLang
}

const lang_browser =
	e_lang_umi.get(localStorage.getItem('umi_locale') || 'en-US') ||
	e_lang.get(window.navigator.language || 'en')

export default {
	namespace: 'app',

	state: {
		lang: lang_browser
	} as IModelApp,

	subscriptions: {
		async setup({ dispatch }) {
			// const { lang } = await Sync.get('lang')
			// if (lang) {
			// 	dispatch({
			// 		type: 'updateState',
			// 		payload: { lang }
			// 	})
			// } else {
			// 	dispatch({
			// 		type: 'updateState',
			// 		payload: { lang: lang_browser }
			// 	})
			// 	await Sync.set({ lang: lang_browser })
			// }
		}
	},

	effects: {},

	reducers: {
		updateState(state, { payload }): IModelApp {
			return {
				...state,
				...payload
			}
		},
		ChangeLanguage(state, { payload }): IModelApp {
			onChangeLanguage(payload.lang, true)

			return {
				...state,
				...payload
			}
		}
	}
} as Model
