import { Fragment } from 'react'
import { memo } from '@/utils/helpers/op'
import {
	AppstoreOutlined,
	LinkOutlined,
	BorderOutlined,
	SkinOutlined,
	UserOutlined,
	SettingOutlined
} from '@ant-design/icons'

export const icons_map: { [key: string]: JSX.Element } = {
	AppstoreOutlined: <AppstoreOutlined />,
	LinkOutlined: <LinkOutlined />,
	BorderOutlined: <BorderOutlined />,
	SkinOutlined: <SkinOutlined />,
	UserOutlined: <UserOutlined />,
	SettingOutlined: <SettingOutlined />
}

const Index = ({ icon }: { icon: string }) => {
	const icon_element = icons_map[icon]

	if (icon_element) return icon_element

	return <Fragment></Fragment>
}

export default memo(Index)
