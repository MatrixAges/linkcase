import Sync from '@/store/sync'
import { e_lang } from '@/enums'
import { onChangeLanguage } from '@/utils/helpers/languages'
import type { Model } from 'R/src/@types/dva'
import type { TLang } from '@/@types/app'

export interface IModelApp {
	lang: TLang
}

const lang_browser = e_lang.get(window.navigator.language || 'en')

export default {
	namespace: 'app',

	state: {
		lang: lang_browser
	} as IModelApp,

	subscriptions: {
		async setup({ dispatch }) {
			const { lang } = await Sync.get('lang')

			if (lang) {
				dispatch({
					type: 'updateState',
					payload: { lang }
				})
			} else {
				const _lang = lang_browser

				dispatch({
					type: 'updateState',
					payload: { lang: _lang }
				})

				await Sync.set({ lang: _lang })
			}
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
