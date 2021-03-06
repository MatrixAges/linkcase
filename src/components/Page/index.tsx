import { Fragment } from 'react'
import { connect } from 'umi'
import styles from './index.less'
import type { IModelApp } from 'umi'

interface IProps {
	children: React.ReactNode
	page_data: IModelApp
	className?: string
}

const Index = (props: IProps) => {
	const { children, page_data, className } = props
	const { visible_modal } = page_data

	return visible_modal ? (
		<div className={styles._local + ' ' + className}>{children}</div>
	) : (
		<Fragment></Fragment>
	)
}

interface IPageData {
	app: IModelApp
}

const getInitialProps = ({ app }: IPageData) => ({
	page_data: app
})

export default window.$app.memo(connect(getInitialProps)(Index))
