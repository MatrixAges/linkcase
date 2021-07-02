import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension, { is_dev } from './config/extension'
import Theme from './src/theme'

const prod_config = !is_dev
	? {
			chunks: ['vendors', 'umi']
	  }
	: {}

export default defineConfig({
	theme: Theme,
	extensions: Extension,
	antd: false,
	esbuild: {},
	cssnano: {},
	webpack5: {},
	fastRefresh: {},
	inlineLimit: 10,
	ignoreMomentLocale: true,
	favicon: '/logo/favicon.ico',
	cssModulesTypescriptLoader: {},
	dva: { immer: true, hmr: true },
	alias: { R: resolve(__dirname, './') },
	mylocale: { antd: false, default: 'en-US' },
	nodeModulesTransform: { type: 'none', exclude: [] },
	...prod_config,
	routes: [
		{
			exact: false,
			path: '/',
			component: '@/layouts',
			routes: [
				{ exact: true, path: '/index', component: '@/chrome/popup' },
				{ exact: true, path: '/options', component: '@/pages' },
				{ exact: true, path: '/site', component: '@/pages/site' }
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
						minChunks: 1,
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
