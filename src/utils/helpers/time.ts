import moment from 'moment'

interface IFormatDate {
	date: string | number
	type?: string
}

export const formatDate = ({ date, type }: IFormatDate) =>
	moment(date).format(type ? type : 'YYYY-MM-DD HH:mm:ss')
