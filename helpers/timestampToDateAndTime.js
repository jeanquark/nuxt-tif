import moment from 'moment'

export default function timestampToDateAndTime(timestamp) {
	// Takes a string date with format DD.MM.YYYY and first transform it to YYYY-MM-DD and then to timestamp
	const date = moment.unix(timestamp).format('YYYY-MM-DD')
	// const time = moment.unix(timestamp).format('HH:MM')
	let dateObj = new Date(timestamp * 1000)
	let hours = dateObj.getHours()
  	// let hours = dateObj.getHours() < 10 ? "0" + dateObj.getHours().toString() : ""
  	// let minutes = date2.getMinutes()
  	let minutes = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : ""
	return {
		'date': date,
		'hours': hours,
		'minutes': minutes
	}
	const [day, month, year] = date.split(".")
	const reOrderedDate = year + '-' + month + '-' + day
	const completeDate = reOrderedDate + ', ' + time
	const formattedDate = parseInt(moment(completeDate, 'YYYY-MM-DD, HH:mm').format('X'))
	return formattedDate
}