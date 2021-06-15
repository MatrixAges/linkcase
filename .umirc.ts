import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension from './config/extension'
import Theme from './src/theme'

export default defineConfig({
	title: 'Linkcase',
	theme: Theme,
	extensions: Extension,
	antd: {},
	esbuild: {},
	cssnano: {},
	webpack5: {},
	fastRefresh: {},
	targets: { chrome: 72 },
	favicon: '/logo/favicon.ico',
	cssModulesTypescriptLoader: {},
	dva: { immer: true, hmr: true },
	nodeModulesTransform: { type: 'none' },
	alias: { R: resolve(__dirname, './') },
	locale: { antd: true, default: 'en-US' },
	links: [{ rel: 'preconnect', href: 'https://fonts.lug.ustc.edu.cn' }],
	styles: [
		`@import url('https://fonts.lug.ustc.edu.cn/css2?family=Open+Sans&display=swap')`,
		`@import url('https://fonts.lug.ustc.edu.cn/css2?family=Noto+Sans+SC&display=swap')`
	],
	routes: [
		{
			exact: false,
			path: '/',
			component: '@/layouts',
			routes: [
				{ exact: true, path: '/index', component: '@/chrome/popup' },
				{ exact: true, path: '/options', component: '@/pages/index' },
				{ exact: true, path: '/ex', component: '@/pages/ex' }
			]
		}
	]
})
