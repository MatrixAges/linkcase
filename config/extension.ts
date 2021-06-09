export default {
	name: 'Linkcase',
	version: '0.0.1',
	description: 'A better way to reuse your bookcase and favorites.',
	minimumChromeVersion: '72',
	popupUI: '@/chrome/popup',
	contentScripts: [{ matches: ['<all_urls>'], entries: ['@/chrome/scripts'] }],
	optionsUI: {
		page: '@/pages',
		openInTab: true
	},
	background: {
		scripts: ['@/chrome/background/index'],
		persistent: true
	},
	extends: {
		chrome_url_overrides: {
			newtab: 'options.html'
		},
		homepage_url: 'https://github.com/MatrixAges/linkcase'
	},
	icons: {
		16: 'logo/linkcase@16.png',
		32: 'logo/linkcase@32.png',
		48: 'logo/linkcase@48.png',
		128: 'logo/linkcase@128.png'
	},
	permissions: [
		'http://*/*',
		'https://*/*',
		'activeTab',
		'storage',
		'unlimitedStorage',
		'bookmarks'
	]
}
