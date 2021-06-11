import { resolve } from 'path'
import { defineConfig } from 'umi'
import Extension from './config/extension'
import Theme from './src/theme'

export default defineConfig({
	title: 'Linkcase',
	antd: {},
	esbuild: {},
	cssnano: {},
	webpack5: {},
	fastRefresh: {},
	targets: { chrome: 72 },
	cssModulesTypescriptLoader: {},
	dva: { immer: true, hmr: true },
	nodeModulesTransform: { type: 'none' },
	alias: { R: resolve(__dirname, './') },
	locale: { antd: true, default: 'en-US' },
	theme: Theme,
	extensions: Extension,
	links: [{ rel: 'preconnect', href: 'https://fonts.lug.ustc.edu.cn' }],
	styles: [
		`@import url('https://fonts.lug.ustc.edu.cn/css2?family=Open+Sans&display=swap')`,
		`@import url('https://fonts.lug.ustc.edu.cn/css2?family=Noto+Sans+SC&display=swap')`
	]
})
