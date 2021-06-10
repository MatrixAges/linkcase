import { getMessage } from '@extend-chrome/messages'

interface ITheme {
	theme: 'light' | 'dark' | 'no-preference'
}

export const [setTheme, onTheme] = getMessage<ITheme>('theme')
