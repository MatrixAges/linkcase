import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
import Modal from '@/components/Modal'
import styles from './index.less'
import type { IPropsSearch } from '../../index'

const Index = (props: IPropsSearch) => {
	const { visible, search_text, dispatch } = props

	const setVisible = (v: boolean) => {
		dispatch({
			type: 'app/updateState',
			payload: { visible_search: v }
		})
	}

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		dispatch({
			type: 'app/updateState',
			payload: { search_text: e.target.value }
		})
	}

	const onClear = () => {
		dispatch({
			type: 'app/updateState',
			payload: { search_text: '' }
		})
	}

	return (
		<div className={styles._local}>
			<div className='search_wrap h_100 flex justify_center align_center'>
				<button
					className='btn_input_search flex justify_center align_center relative'
					onClick={() => setVisible(true)}
				>
					<span className='btn_input_search_placeholder disabled'>
						Input and search
					</span>
					<SearchOutlined className='icon_search absolute disabled'></SearchOutlined>
				</button>
			</div>
			<Modal
				visible={visible}
				position='center'
				centered={false}
				maskVisible
				maskClosable
				maskBlur
				style={{ width: 600, margin: '0 auto' }}
				onClose={() => setVisible(false)}
			>
				<div className='modal_search border_box flex flex_column align_center justify_start'>
					<svg
						className='icon_engine'
						role='img'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						width='100'
						fill='white'
					>
						<path d='M9.154 0C7.71 0 6.54 1.658 6.54 3.707c0 2.051 1.171 3.71 2.615 3.71 1.446 0 2.614-1.659 2.614-3.71C11.768 1.658 10.6 0 9.154 0zm7.025.594C14.86.58 13.347 2.589 13.2 3.927c-.187 1.745.25 3.487 2.179 3.735 1.933.25 3.175-1.806 3.422-3.364.252-1.555-.995-3.364-2.362-3.674a1.218 1.218 0 0 0-.261-.03zM3.582 5.535a2.811 2.811 0 0 0-.156.008c-2.118.19-2.428 3.24-2.428 3.24-.287 1.41.686 4.425 3.297 3.864 2.617-.561 2.262-3.68 2.183-4.362-.125-1.018-1.292-2.773-2.896-2.75zm16.534 1.753c-2.308 0-2.617 2.119-2.617 3.616 0 1.43.121 3.425 2.988 3.362 2.867-.063 2.553-3.238 2.553-3.988 0-.745-.62-2.99-2.924-2.99zm-8.264 2.478c-1.424.014-2.708.925-3.323 1.947-1.118 1.868-2.863 3.05-3.112 3.363-.25.309-3.61 2.116-2.864 5.42.746 3.301 3.365 3.237 3.365 3.237s1.93.19 4.171-.31c2.24-.495 4.17.123 4.17.123s5.233 1.748 6.665-1.616c1.43-3.364-.808-5.109-.808-5.109s-2.99-2.306-4.736-4.798c-1.072-1.665-2.348-2.268-3.528-2.257zm-2.234 3.84l1.542.024v8.197H7.758c-1.47-.291-2.055-1.292-2.13-1.462-.072-.173-.488-.976-.268-2.343.635-2.049 2.447-2.196 2.447-2.196h1.81zm3.964 2.39v3.881c.096.413.612.488.612.488h1.614v-4.343h1.689v5.782h-3.915c-1.517-.39-1.59-1.465-1.59-1.465v-4.317zm-5.458 1.147c-.66.197-.978.708-1.05.928-.076.22-.247.78-.1 1.269.294 1.095 1.248 1.144 1.248 1.144h1.37v-3.34z' />
					</svg>
					<div className='input_wrap border_box flex justify_center align_center relative'>
						<input
							className='input_search border_box'
							type='text'
							placeholder='Input and Search'
							value={search_text}
							maxLength={888}
							onChange={onChange}
						/>
						<div className='options_wrap h_100 flex align_center'>
							<SearchOutlined className='icon_search absolute transition_normal'></SearchOutlined>
							<CloseCircleOutlined
								className='icon_close absolute transition_normal'
								onClick={onClear}
							></CloseCircleOutlined>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default window.$app.memo(Index)
