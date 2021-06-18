export type TLang = 'en' | 'cn'

export interface IBarItem {
	id: number
	name: string
	url: string
	active: boolean
	opened: boolean
	image: any
}

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

export interface ILinkItem {
	id: number
	name: string
	type?: 'wallpaper' | 'note'
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
