import { history } from 'umi'
import { message } from 'antd'
import type { RequestConfig } from 'umi'

export const request: RequestConfig = {
	prefix: '/api',
	requestInterceptors: [
		(url, options) => ({
			url,
			options: {
				...options,
				headers: {
					Authorization: window.localStorage.getItem('SESSION') || ''
				}
			}
		})
	],
	responseInterceptors: [
		async (response) => {
			try {
				const { code, success, msg } = await response.clone().json()

				if (code === 208) history.push('/login')
				if (!success) message.error(msg)
			} catch (_) {}

			return response
		}
	],
	errorHandler(error) {
		const res = error.response
		const code_map = new Map([[404, '接口不存在']])

		if (res && res.status) message.error(code_map.get(res.status))

		return error
	}
}
