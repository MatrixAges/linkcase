import { getBucket } from '@extend-chrome/storage'
import type { TLang } from '@/typings/app'

interface IStore {
	lang: TLang
}

export default getBucket<IStore>('sync', 'sync')
