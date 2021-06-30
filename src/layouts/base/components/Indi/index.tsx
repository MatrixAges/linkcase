import { memo } from 'react'
import styles from './index.less'
import type { IPropsIndi } from '../../index'

const Index = (props: IPropsIndi) => {
	const { page, count, onChangeSwiper } = props

	return (
		<div className={styles._local}>
			<div className='indicate_items h_100 flex justify_center align_center'>
				{Array(count)
					.fill(undefined)
					.map((_, index) => (
						<button
							className='indicate_item_wrap transition_normal'
							onClick={() => onChangeSwiper(index + 1)}
							key={index}
						>
							<span
								className={`
                                                indicate_item
                                                ${page === index + 1 ? 'active' : ''}
                                          `}
							></span>
						</button>
					))}
			</div>
		</div>
	)
}

export default memo(Index)
