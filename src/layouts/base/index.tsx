import { useRef } from 'react'
import { useIntl, Helmet } from 'umi'
import { useCreation, useSize } from 'ahooks'
import { useReactiveSize, useGetBlockWidth, useData, useDragPaging } from './hooks'
import Search from './components/Search'
import Sites from './components/Sites'
import Indi from './components/Indi'
import SideBar from './components/SideBar'
import Modal from './components/Modal'
import styles from './index.less'
import type { Swiper } from 'swiper'
import type { IModelApp, Dispatch } from 'umi'
import type { ISite } from '@/typings/app'

interface IProps {
	page_data: IModelApp
	dispatch: Dispatch
}

export interface IReactive {
	size_item: number
	interval: number
	row: number
	col: number
}

export interface IPropsSearch {
	visible: IModelApp['visible_search']
	search_text: IModelApp['search_text']
	dispatch: Dispatch
}

export interface IPropsSites {
	data: Array<Array<ISite>>
	dispatch: Dispatch
	getBlockWidth: (column: number | undefined) => number | undefined
	setList: (list: Array<ISite>, index: number) => void
	getSwiperInstance: (e: Swiper) => void
}

export interface IPropsIndi {
	page: IModelApp['page']
	count: number
	onChangeSwiper: (index: number) => void
}

export interface IPropsSiderbar {
	history: IModelApp['history']
	visible_search: IModelApp['visible_search']
}

export interface IPropsModal {
	visible: IModelApp['visible_modal']
	visible_search: IModelApp['visible_search']
	dispatch: Dispatch
}

const Index = (props: IProps) => {
	const { page_data, dispatch } = props
	const { visible_modal, visible_search, search_text, dragging, page, sites, history } =
		page_data
	const intl = useIntl()
	const swiper = useRef<Swiper>()
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const reactive = useReactiveSize(width, height)
	const { data, setList } = useData(sites, reactive)
	const getBlockWidth = useGetBlockWidth(reactive)

	useDragPaging(dragging, body, width, page, swiper)

	const props_search: IPropsSearch = {
		visible: visible_search,
		search_text,
		dispatch
	}

	const props_sites: IPropsSites = {
		data,
		dispatch,
		getBlockWidth,
		setList,
		getSwiperInstance: (e: Swiper) => (swiper.current = e)
	}

	const props_indi: IPropsIndi = {
		page,
		count: data.length,
		onChangeSwiper: (index: number) => {
			swiper.current?.slideTo(index)
		}
	}

	const props_sider_bar: IPropsSiderbar = {
		history,
		visible_search
	}

	const props_modal: IPropsModal = {
		visible: visible_modal,
		visible_search,
		dispatch
	}

	return (
		<div className={styles._local}>
			<Helmet>
				<title>{intl.formatMessage({ id: 'title' })}</title>
			</Helmet>
			<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
				<Search {...props_search}></Search>
				<Sites {...props_sites}></Sites>
				<Indi {...props_indi}></Indi>
				<SideBar {...props_sider_bar}></SideBar>
				<Modal {...props_modal}></Modal>
			</div>
		</div>
	)
}

export default window.$app.memo(Index)
