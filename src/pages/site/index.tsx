import { connect } from 'umi'
import Page from '@/components/Page'
import Category from './components/Category'
import Site from './components/Site'
import styles from './index.less'
import type { IModelSite, ConnectRC } from 'umi'

interface IProps {
	page_data: IModelSite
}

export interface IPropsSite {
	sites: IModelSite['sites']
}

const Index: ConnectRC<IProps> = (props) => {
	const { page_data } = props
	const { sites } = page_data

	const props_site: IPropsSite = {
		sites
	}

	return (
		<Page className={styles._local}>
			<Category></Category>
			<Site {...props_site}></Site>
		</Page>
	)
}

interface IPageData {
	site: IModelSite
}

const getInitialProps = ({ site }: IPageData) => ({
	page_data: site
})

export default window.$app.memo(connect(getInitialProps)(Index))
