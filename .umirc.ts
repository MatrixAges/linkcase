import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension from './config/extension'

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
	locale: { default: 'zh-CN' },
	extensions: Extension
})
