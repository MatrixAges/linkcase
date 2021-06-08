import { e_lang } from '@/enums'
import Sync from '@/store/sync'
import { onChangeLanguage } from '@/utils/helpers/languages'
import type { Model } from 'R/src/@types/dva'
import type { TLang } from '@/@types/app'

export interface IModelApp {
	lang: TLang
}

export default {
	namespace: 'app',

	state: {
		lang: 'en'
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
				const _lang = e_lang.get(window.navigator.language || 'en-US')

				dispatch({
					type: 'updateState',
					payload: { lang: _lang }
				})

				await Sync.set({ lang: _lang })
			}
		}
	},

	effects: {
		*getLang({ payload }, { put }) {
			const { lang } = payload

			yield put({
				type: 'updateState',
				payload: { lang } as IModelApp
			})
		},
		*setLang({ payload }, { put }) {
			const { lang } = payload

			yield put({
				type: 'updateState',
				payload: { lang } as IModelApp
			})
		}
	},

	reducers: {
		updateState(state, { payload }): IModelApp {
			return {
				...state,
				...payload
			}
		},
		ChangeLanguage(state, { payload }): IModelApp {
			onChangeLanguage(payload.lang)

			return {
				...state,
				...payload
			}
		}
	}
} as Model
