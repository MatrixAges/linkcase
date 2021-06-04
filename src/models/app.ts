import { history } from 'umi'
import type { Model } from '@/@types/dva.interface'

export interface IModelApp {
	lang: 'en' | 'cn'
}

export default {
	namespace: 'app',

	state: {
		lang: 'en'
	} as IModelApp,

	subscriptions: {
		setup({ dispatch }) {
			if (history.location.pathname !== '/index.html') {
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
		updateState(state, { payload }: any) {
			return {
				...state,
				...payload
			}
		}
	}
} as Model
