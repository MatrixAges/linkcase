export default {
	name: 'Linkcase',
	version: '0.0.1',
	description: 'A better way to reuse your bookcase and favorites.',
	minimumChromeVersion: '72',
	permissions: ['http://*/*', 'https://*/*'],
	popupUI: '@/chrome/popup',
	optionsUI: {
		page: '@/pages',
		openInTab: true
	},
	background: {
		scripts: ['@/chrome/background/index'],
		persistent: true
	},
	contentScripts: [{ matches: ['<all_urls>'], entries: ['@/chrome/scripts'] }],
	icons: {
		16: 'logo/linkcase@16.png',
		32: 'logo/linkcase@32.png',
		48: 'logo/linkcase@48.png',
		128: 'logo/linkcase@128.png'
	}
}
