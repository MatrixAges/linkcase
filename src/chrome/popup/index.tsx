import { memo, useState } from 'react'
import { connect, useIntl } from 'umi'
import { ConfigProvider, Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import useLang from '@/hooks/use_lang'
import useBookmarks from '@/hooks/use_bookmarks'
import styles from './index.less'
import type { IModelApp, ConnectRC } from 'umi'

const { TextArea } = Input

interface IProps {
	page_data: IModelApp
}

const Index: ConnectRC<IProps> = (props) => {
	const { page_data } = props
	const { lang } = page_data
	const intl = useIntl()
	const locale = useLang(lang)
	const [s_seraching, setSearching] = useState(false)
	const bookmarks = useBookmarks()

	return (
		<ConfigProvider locale={locale}>
			<div
				className={`
                              ${styles._local}
                              flex flex_column relative
                        `}
			>
				<div className='title_wrap'>
					<span className='title'>
						{intl.formatMessage({ id: 'popup.title' })}
					</span>
				</div>
				<div className='input_items flex flex_column'>
					<div className='link_name input_item flex flex_column'>
						<span className='name'>
							{intl.formatMessage({
								id: 'popup.input_items.link_name.name'
							})}
						</span>
						<TextArea
							className='value_item font_bold'
							value='Why So Many Data Scientists Quit Good Jobs at Great Companies'
							style={{ resize: 'none' }}
							rows={2}
						></TextArea>
					</div>
					<div className='link_folder input_item flex flex_column'>
						{s_seraching ? (
							<div className='search_wrap flex'>
								<Input
									placeholder={intl.formatMessage({
										id: 'popup.input_items.link_folder.search_placeholder'
									})}
									autoFocus
								></Input>
								<Button
									className='btn_cancel'
									onClick={() => setSearching(false)}
								>
									{intl.formatMessage({
										id: 'popup.input_items.link_folder.search_cancel'
									})}
								</Button>
							</div>
						) : (
							<div className='name justify_between'>
								<span>
									{intl.formatMessage({
										id: 'popup.input_items.link_folder.name'
									})}
								</span>
								<div
									className='btn_search_wrap'
									onClick={() => setSearching(true)}
								>
									<SearchOutlined className='btn_search' />
								</div>
							</div>
						)}
						<div className='folder_items value_item border_box flex flex_wrap align_start'>
							{bookmarks[0] &&
								bookmarks[0].children &&
								bookmarks[0].children.map((item) => (
									<div
										className='folder_item flex flex_column align_center'
										key={item.key}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											width='24'
											height='24'
										>
											<path
												fill='none'
												d='M0 0h24v24H0z'
											/>
											<path d='M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1zm8 11.5l2.939 1.545-.561-3.272 2.377-2.318-3.286-.478L12 6l-1.47 2.977-3.285.478 2.377 2.318-.56 3.272L12 13.5z' />
										</svg>
										<span className='folder_name line_clamp_2'>
											{item.title}
										</span>
									</div>
								))}
						</div>
					</div>
				</div>
				<div className='btn_wrap w_100 border_box absolute bottom_0 left_0'>
					<Button className='btn_confirm w_100' type='primary' size='large'>
						{intl.formatMessage({ id: 'popup.confirm_text' })}
					</Button>
				</div>
			</div>
		</ConfigProvider>
	)
}

interface IPageData {
	app: IModelApp
}

const getInitialProps = ({ app }: IPageData) => ({
	page_data: app
})

export default memo(connect(getInitialProps)(Index))
