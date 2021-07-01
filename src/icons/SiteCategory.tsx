import { Fragment } from 'react'
import {
	FireOutlined,
	ShareAltOutlined,
	ExperimentOutlined,
	CodeSandboxOutlined,
	BellOutlined,
	YoutubeOutlined,
	InstagramOutlined,
	ShoppingOutlined,
	RedditOutlined,
	MessageOutlined,
	MediumOutlined,
	CarOutlined,
	CoffeeOutlined,
	RocketOutlined,
	ScheduleOutlined,
	RobotOutlined,
	SendOutlined,
	DollarCircleOutlined,
	ReadOutlined,
	AppstoreOutlined
} from '@ant-design/icons'

export const icons_map: { [key: string]: JSX.Element } = {
	FireOutlined: <FireOutlined />,
	ShareAltOutlined: <ShareAltOutlined />,
	ExperimentOutlined: <ExperimentOutlined />,
	CodeSandboxOutlined: <CodeSandboxOutlined />,
	BellOutlined: <BellOutlined />,
	YoutubeOutlined: <YoutubeOutlined />,
	InstagramOutlined: <InstagramOutlined />,
	ShoppingOutlined: <ShoppingOutlined />,
	RedditOutlined: <RedditOutlined />,
	MessageOutlined: <MessageOutlined />,
	MediumOutlined: <MediumOutlined />,
	CarOutlined: <CarOutlined />,
	CoffeeOutlined: <CoffeeOutlined />,
	RocketOutlined: <RocketOutlined />,
	ScheduleOutlined: <ScheduleOutlined />,
	RobotOutlined: <RobotOutlined />,
	SendOutlined: <SendOutlined />,
	DollarCircleOutlined: <DollarCircleOutlined />,
	ReadOutlined: <ReadOutlined />,
	AppstoreOutlined: <AppstoreOutlined />
}

const Index = ({ icon }: { icon: string }) => {
	const icon_element = icons_map[icon]

	if (icon_element) return icon_element

	return <Fragment></Fragment>
}

export default window.$app.memo(Index)
