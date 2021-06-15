import { memo } from 'react'
import { Switch, Case, Default } from 'react-if'
import { link_items } from '@/data'
import styles from './index.less'

const Index = () => {
	return (
		<div className={styles._local}>
			<div className='link_items h_100 flex flex_wrap'>
				{link_items.map((item, index) => (
					<Switch key={index}>
						<Case condition={item.type === 'photo'}>
							<div
								className='link_item_wrap photo flex flex_column align_center'
								style={{
									gridRow: `span ${item.row}`,
									gridColumn: `span ${item.column}`
								}}
							>
								<div
									className='link_item cursor_point relative'
									style={{
										backgroundImage: `url(${item.image})`
									}}
								>
									<div className='info_wrap absolute flex flex_column'>
										<span className='desc'>
											{item.desc}
										</span>
										<span className='date'>
											{item.date}
										</span>
									</div>
								</div>
								<span className='text'>{item.name}</span>
							</div>
						</Case>
						<Case condition={item.type === 'note'}>
							<div
								className='link_item_wrap note photo flex flex_column align_center'
								style={{
									gridRow: `span ${item.row}`,
									gridColumn: `span ${item.column}`
								}}
							>
								<div className='link_item cursor_point relative bg_white'>
									<div className='note_items w_100 h_100 border_box flex flex_column'>
										{item.data &&
											item.data.map((it, idx) => (
												<div
													className={`
                                                                                    note_item flex align_center
                                                                                    ${
															it.done
																? 'done'
																: ''
														}
                                                                              `}
													key={idx}
												>
													<span className='text'>
														{it.text}
													</span>
												</div>
											))}
									</div>
								</div>
								<span className='text'>{item.name}</span>
							</div>
						</Case>
						<Default>
							<div className='link_item_wrap flex flex_column align_center'>
								<a
									className='link_item cursor_point relative'
									target='_blank'
									style={{
										backgroundImage: `url(${item.image})`
									}}
								></a>
								<span className='text'>{item.name}</span>
							</div>
						</Default>
					</Switch>
				))}
			</div>
		</div>
	)
}

export default memo(Index)
