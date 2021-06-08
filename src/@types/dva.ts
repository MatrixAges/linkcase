import type { Reducer, ReducersMapObject, Dispatch, AnyAction } from 'redux'
import type { History } from 'umi'

interface ReducerEnhancer {
	(reducer: Reducer<any>): void
}

interface EffectsCommandMap {
	put: <A extends AnyAction>(action: A) => any
	call: Function
	select: Function
	take: Function
	cancel: Function

	[key: string]: any
}

type Effect = (action: AnyAction, effects: EffectsCommandMap) => void
type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle'
type EffectWithType = [Effect, { type: EffectType }]
type Subscription = (api: SubscriptionAPI, done: Function) => void
type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer]

interface SubscriptionAPI {
	history: History
	dispatch: Dispatch<any>
}

interface SubscriptionsMapObject {
	[key: string]: Subscription
}

interface EffectsMapObject {
	[key: string]: Effect | EffectWithType
}

interface ReduxV3ReducersMapObject {
	[key: string]: Reducer<any>
}

export interface Model {
	namespace: string
	state?: any
	reducers?: ReduxV3ReducersMapObject | ReducersMapObjectWithEnhancer
	effects?: EffectsMapObject
	subscriptions?: SubscriptionsMapObject
}
