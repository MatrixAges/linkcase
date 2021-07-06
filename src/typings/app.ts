export type Memo = <T>(
	el: (props: T) => JSX.Element | null
) => React.MemoExoticComponent<(props: T) => JSX.Element | null>

export type TLang = 'en' | 'cn'

export interface IWallpaper {
	name: string
	date: string
	src: any
}

export interface INote {
	text: string
	done: boolean
}

export type TData = Partial<IWallpaper & INote>

export interface ISite {
	id: number
	block_id?: number
	name?: string
	type?: 'holder' | 'wallpaper' | 'note'
	desc?: string
	date?: string
	url?: string
	image?: any
	data?: Array<TData>
	row?: number
	column?: number
	x?: number
	y?: number
}

export interface ITabItem {
	id: number
	name: string
	to: string
	icon: string
}

export interface IQuickerItem {
	id: number
	name: string
	action: string
	icon: string
}
