import type { Model } from '@/@types/dva.interface'

export interface IModelCommon {
	list: Array<any>
	pagination: {
		showSizeChanger: boolean
		showQuickJumper: boolean
		current: number
		total: number
		pageSize: number
	}
	state_current_item: any
	state_modal_visible: boolean
	state_modal_type: string
}

const pageModel: Model = {
	namespace: 'common',

	state: {
		list: [],
		pagination: {
			showSizeChanger: true,
			showQuickJumper: true,
			current: 1,
			total: 0,
			pageSize: 10
		}
	},

	reducers: {
		updateState(state, { payload }: any) {
			return {
				...state,
				...payload
			}
		},
		querySuccess(state, { payload }: any) {
			const { list, pagination } = payload

			return {
				...state,
				list,
				pagination: {
					...state.pagination,
					...pagination
				}
			}
		}
	}
}

export default pageModel
