import { memo, useState } from 'react'
import { Tooltip } from 'antd'
import { cloneDeep } from 'lodash-es'
import { bar_items } from '@/data'
import { useDeactive } from './hooks'
import styles from './index.less'

const Index = () => {
	const [s_bar_items, setBarItems] = useState(bar_items)
	const [s_index, setIndex] = useState<number | undefined>(undefined)

	useDeactive(s_index, s_bar_items, setBarItems)

	const onBarItem = (index: number) => {
		const _s_bar_items = cloneDeep(s_bar_items)

		_s_bar_items[index].active = true

		setIndex(index)
		setBarItems(_s_bar_items)
	}

	return (
		<div className={styles._local}>
			<div className='bar_items h_100 border_box flex justify_center align_center'>
				{s_bar_items.map((item, index) => (
					<Tooltip
						title={item.name}
						key={index}
						placement='top'
						mouseEnterDelay={0.3}
						mouseLeaveDelay={0}
					>
						<a
							className={`
                                                bar_item cursor_point
                                                ${item.active ? 'touched disabled' : ''}
                                          `}
							target='_blank'
							style={{ backgroundImage: `url(${item.image})` }}
							onClick={() => onBarItem(index)}
						></a>
					</Tooltip>
				))}
			</div>
		</div>
	)
}

export default memo(Index)
