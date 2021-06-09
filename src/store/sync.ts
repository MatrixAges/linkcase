import { getBucket } from '@extend-chrome/storage'
import type { TLang } from '@/@types/app'

interface IStore {
	lang: TLang
}

export default getBucket<IStore>('sync', 'sync')
