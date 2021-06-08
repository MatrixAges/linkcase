import { getBucket } from '@extend-chrome/storage'

interface IStore {
	test: string
}

export default getBucket<IStore>('local')
