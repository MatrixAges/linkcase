import { getBucket } from '@extend-chrome/storage'

interface IStore {}

export default getBucket<IStore>('local', 'local')
