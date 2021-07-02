import { request } from 'umi'
import API from '@/api'

export default {
	getSites: () => request(API.getSites),
	getHistory: () => request(API.getHistory),
	getPubSites: () => request(API.getPubSites)
}
