import type { Model } from '@/typings/dva'

export interface IModelCommon {}

const pageModel: Model = {
	namespace: 'common',

	state: {} as IModelCommon,

	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			}
		}
	}
}

export default pageModel
