import Sync from '@/store/sync'
import { e_lang, e_lang_umi } from '@/enums'
import { onChangeLanguage } from '@/utils/helpers/languages'
import Service from '@/service'
import type { Model } from '@/typings/dva'
import type { TLang, ISite } from '@/typings/app'

export interface IModelApp {
	lang: TLang
	dom_ready: boolean
	visible_modal: boolean
	page: number
	search_text: string
	sites: Array<Array<ISite>>
	history: {
		common: Array<ISite>
		recent: Array<ISite>
	}
}

const lang_browser =
	e_lang_umi.get(localStorage.getItem('umi_locale') || 'en-US') ||
	e_lang.get(window.navigator.language || 'en')

export default {
	namespace: 'app',

	state: {
		lang: lang_browser,
		dom_ready: false,
		visible_modal: false,
		page: 1,
		search_text: '',
		sites: [[]],
		history: { common: [], recent: [] }
	} as IModelApp,

	subscriptions: {
		async setup({ dispatch }) {
			dispatch({ type: 'getSites' })
			dispatch({ type: 'getHistory' })

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
			//       })
			// 	await Sync.set({ lang: lang_browser })
			// }
		}
	},

	effects: {
		*getSites({}, { call, put }) {
			const {
				result: { data }
			} = yield call(Service.getSites)

			yield put({
				type: 'updateState',
				payload: { sites: data } as IModelApp
			})
		},
		*getHistory({}, { call, put }) {
			const {
				result: { data }
			} = yield call(Service.getHistory)

			yield put({
				type: 'updateState',
				payload: { history: data } as IModelApp
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
			onChangeLanguage(payload.lang, true)

			return {
				...state,
				...payload
			}
		}
	}
} as Model
