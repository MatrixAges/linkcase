import { Fragment } from 'react'
import {
	SyncOutlined,
	BorderOutlined,
	DollarOutlined,
	BugOutlined,
	SettingOutlined
} from '@ant-design/icons'

export const icons_map: { [key: string]: JSX.Element } = {
	SyncOutlined: <SyncOutlined />,
	BorderOutlined: <BorderOutlined />,
	DollarOutlined: <DollarOutlined />,
	BugOutlined: <BugOutlined />,
	SettingOutlined: <SettingOutlined />
}

const Index = ({ icon }: { icon: string }) => {
	const icon_element = icons_map[icon]

	if (icon_element) return icon_element

	return <Fragment></Fragment>
}

export default window.$app.memo(Index)
