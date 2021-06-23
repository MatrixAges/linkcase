import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension, { is_dev } from './config/extension'
import Theme from './src/theme'

export default defineConfig({
	theme: Theme,
	extensions: Extension,
	antd: false,
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
	locale: { antd: false, default: 'en-US' },
	links: [{ rel: 'preconnect', href: 'https://fonts.lug.ustc.edu.cn' }],
	styles: [`@import url('https://fonts.lug.ustc.edu.cn/css2?family=Open+Sans&display=swap')`],
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
	],
	chainWebpack(config) {
		if (!is_dev) {
			config.merge({
				optimization: {
					splitChunks: {
						chunks: 'all',
						minSize: 30000,
						minChunks: 3,
						automaticNameDelimiter: '.',
						cacheGroups: {
							vendor: {
								name: 'vendors',
								test({ resource }: any) {
									return /[\\/]node_modules[\\/]/.test(resource)
								},
								priority: 10
							}
						}
					}
				}
			})
		}
	}
})
