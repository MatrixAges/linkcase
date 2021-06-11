export default {
	name: 'Linkcase',
	version: '0.0.1',
	description: 'A better way to reuse your bookcase and favorites.',
	minimumChromeVersion: '72',
	popupUI: '@/chrome/popup',
	contentScripts: [
		{
			matches: ['<all_urls>'],
			entries: ['@/chrome/scripts']
		}
	],
	background: {
		scripts: ['@/chrome/background'],
		persistent: true
	},
	extends: {
		chrome_url_overrides: {
			newtab: 'options.html'
		},
		homepage_url: 'https://github.com/MatrixAges/linkcase'
	},
	icons: {
		16: 'logo/linkcase@16_dark.png',
		32: 'logo/linkcase@32_dark.png',
		48: 'logo/linkcase@48_dark.png',
		128: 'logo/linkcase@128_dark.png'
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
