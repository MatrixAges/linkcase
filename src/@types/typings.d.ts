declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'

declare module '@lcdp/offline-plugin'
declare module 'less-vars-to-js'
declare module 'dva-model-extend' {
	import type { Model } from '@/typings/dva'

	const modelExtend: (common_model: Model, target_model: Model) => Model

	export default modelExtend
}
