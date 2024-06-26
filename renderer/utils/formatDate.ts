export function formatDate(dateString: string) {
	const date = new Date(dateString)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	return `${day < 10 ? '0' + day : day}.${
		month < 10 ? '0' + month : month
	}.${year}`
}
