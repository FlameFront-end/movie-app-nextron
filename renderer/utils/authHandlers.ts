import { AxiosError } from 'axios'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'

export const handleSuccess = (data: any, message: string) => {
	toast.success(message)

	setCookie(null, '_token', data.token, {
		path: '/'
	})

	location.href = '/'
}

export const handleError = (err: AxiosError | any) => {
	if (err instanceof AxiosError) {
		const errorMessage = err.response?.data?.message
		if (errorMessage) {
			toast.error(errorMessage)
		}
	} else {
		const errorMessages = err.response?.data?.message

		if (Array.isArray(errorMessages) && errorMessages.length > 0) {
			errorMessages.forEach((errorMessage: string) => {
				toast.error(errorMessage)
			})
		}
	}
	toast.error('Error')
}
