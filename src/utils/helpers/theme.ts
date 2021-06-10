import { setTheme, onTheme } from '@/message/theme'

export const _setTheme = () => {
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		setTheme({ theme: 'light' })
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setTheme({ theme: 'dark' })
	}

	if (window.matchMedia('(prefers-color-scheme: no-preference)').matches) {
		setTheme({ theme: 'no-preference' })
	}
}

export const _onTheme = () => {
	onTheme.subscribe(([{ theme }]) => {
		if (theme === 'light' || theme === 'no-preference') {
			chrome.browserAction.setIcon({
				path: {
					16: 'logo/linkcase@16.png',
					32: 'logo/linkcase@32.png',
					48: 'logo/linkcase@48.png',
					128: 'logo/linkcase@128.png'
				}
			})
		}

		if (theme === 'dark') {
			chrome.browserAction.setIcon({
				path: {
					16: 'logo/linkcase@16_dark.png',
					32: 'logo/linkcase@32_dark.png',
					48: 'logo/linkcase@48_dark.png',
					128: 'logo/linkcase@128_dark.png'
				}
			})
		}
	})
}
