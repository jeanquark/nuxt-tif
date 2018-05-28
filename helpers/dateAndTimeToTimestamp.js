import moment from 'moment'

export default function dateAndTimeToTimestamp(date, time) {
	// Takes a string date with format DD.MM.YYYY and first transform it to YYYY-MM-DD and then to timestamp
	const [day, month, year] = date.split(".")
	const reOrderedDate = year + '-' + month + '-' + day
	const completeDate = reOrderedDate + ', ' + time
	const formattedDate = parseInt(moment(completeDate, 'YYYY-MM-DD, HH:mm').format('X'))
	return formattedDate
}