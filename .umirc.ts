import { resolve } from 'path'
import { defineConfig } from 'umi'
import THEME from './src/theme'
import CONFIG from './config'

// @ts-ignore
const env: 'development' | 'production' = process.env.NODE_ENV

export default defineConfig({
	theme: THEME,
	antd: {},
	title: CONFIG.name,
	hash: true,
	cssnano: {},
	webpack5: {},
	fastRefresh: {},
	locale: { antd: true },
	favicon: '/site/favicon.ico',
	cssModulesTypescriptLoader: {},
	dva: { immer: true, hmr: true },
	nodeModulesTransform: { type: 'none' },
	alias: { R: resolve(__dirname, './') },
	links: [env === 'production' && { rel: 'manifest', href: '/manifest.json' }],
	dynamicImport: { loading: '@/components/Loader/index' },
	chainWebpack(config) {
		config.resolve.alias.set('moment$', resolve(__dirname, 'node_modules/moment/moment.js'))

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
							test({ resource }) {
								return /[\\/]node_modules[\\/]/.test(resource)
							},
							priority: 10
						}
					}
				}
			}
		})
	}
})
