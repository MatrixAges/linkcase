import pageModel from '@/utils/model'
import extend from 'dva-model-extend'
import Service from '@/service'
import type { ISite } from '@/typings/app'

export interface IModelSite {
	sites: Array<ISite>
}

export default extend(pageModel, {
	namespace: 'site',

	state: {
		sites: []
	} as IModelSite,

	subscriptions: {
		async setup({ dispatch, history }) {
			history.listen(({ pathname }) => {
				if (pathname === '/site.html') {
					dispatch({ type: 'getPubSites' })
				}
			})
		}
	},

	effects: {
		*getPubSites({}, { call, put }) {
			const {
				result: { data }
			} = yield call(Service.getPubSites)

			yield put({
				type: 'updateState',
				payload: { sites: data } as IModelSite
			})
		}
	}
})
