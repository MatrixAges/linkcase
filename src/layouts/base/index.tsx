import { useRef } from 'react'
import { memo } from '@/utils/helpers/op'
import { useIntl, Helmet } from 'umi'
import { useReactive, useCreation, useSize } from 'ahooks'
import { useReactiveSize, useGetBlockWidth, useChunkData } from './hooks'
import Search from './components/Search'
import Sites from './components/Site'
import Indi from './components/Indi'
import SideBar from './components/SideBar'
import Modal from './components/Modal'
import { link_items } from '@/data/mock'
import styles from './index.less'
import type { Swiper } from 'swiper'
import type { IModelApp, Dispatch } from 'umi'
import type { ILinkItem } from '@/typings/app'

interface IProps {
	page_data: IModelApp
	dispatch: Dispatch
}

export interface IReactive {
	size_item: number
	interval: number
}

export interface IPropsSites {
	data: Array<Array<ILinkItem>>
	dispatch: Dispatch
	getBlockWidth: (column: number | undefined) => number | undefined
	setList: (source_data: Array<Array<ILinkItem>>, list: Array<ILinkItem>, index: number) => void
	getSwiperInstance: (e: Swiper) => void
}

export interface IPropsIndi {
	page: IModelApp['page']
	count: number
	onChangeSwiper: (index: number) => void
}

export interface IPropsModal {
	visible: IModelApp['visible_modal']
	dispatch: Dispatch
}

const Index = (props: IProps) => {
	const { page_data, dispatch } = props
	const { visible_modal, page } = page_data
	const intl = useIntl()
	const swiper = useRef<Swiper>()
	const reactive = useReactive({ size_item: 160, interval: 10 })
	const body = useCreation(() => document.querySelector('body'), [])
	const { width, height } = useSize(body)
	const { row, col } = useReactiveSize(width, height, reactive)
	const { data, setList } = useChunkData(link_items, row, col)
	const getBlockWidth = useGetBlockWidth(reactive)

	const props_sites: IPropsSites = {
		data,
		dispatch,
		getBlockWidth,
		setList,
		getSwiperInstance: (e: Swiper) => (swiper.current = e)
	}

	console.log('page ' + page)

	const props_indi: IPropsIndi = {
		page,
		count: data.length,
		onChangeSwiper: (index: number) => {
			swiper.current?.slideTo(index)
		}
	}

	const props_modal: IPropsModal = {
		visible: visible_modal,
		dispatch
	}

	return (
		<div className={styles._local}>
			<Helmet>
				<title>{intl.formatMessage({ id: 'title' })}</title>
			</Helmet>
			<div className='content_wrap border_box absolute top_0 left_0 w_100 h_100 flex flex_column'>
				<Search></Search>
				<Sites {...props_sites}></Sites>
				<Indi {...props_indi}></Indi>
				<SideBar></SideBar>
				<Modal {...props_modal}></Modal>
			</div>
		</div>
	)
}

export default memo(Index)
