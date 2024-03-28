import { setCookie } from 'nookies'

export const handleSuccessLogin = (data: any) => {
	setCookie(null, '_token', data.token, {
		path: '/'
	})
	location.href = '/'
}
