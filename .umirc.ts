import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension from './config/extension'
import Theme from './src/theme'

export default defineConfig({
	antd: {},
	esbuild: {},
	cssnano: {},
	webpack5: {},
	fastRefresh: {},
	cssModulesTypescriptLoader: {},
	dva: { immer: true, hmr: true },
	nodeModulesTransform: { type: 'none' },
	alias: { R: resolve(__dirname, './') },
	locale: { antd: true, default: 'en-US' },
	theme: Theme,
	extensions: Extension
})
