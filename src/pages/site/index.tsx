import { site_items } from '@/data/mock'
import Page from '@/components/Page'
import Category from './components/Category'
import Site from './components/Site'
import styles from './index.less'
import type { ILinkItem } from '@/typings/app'

export interface IPropsSite {
	site_items: Array<ILinkItem>
}

const Index = () => {
	const props_site = {
		site_items
	}

	return (
		<Page className={styles._local}>
			<Category></Category>
			<Site {...props_site}></Site>
		</Page>
	)
}

export default window.$app.memo(Index)
