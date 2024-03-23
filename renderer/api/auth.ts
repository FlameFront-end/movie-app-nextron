import { isAxiosError } from 'axios'
import { destroyCookie } from 'nookies'
import axios from '../utils/axios'
import {
	LoginFormDTO,
	LoginResponseDTO,
	RegisterFormDTO,
	RegisterResponseDTO,
	ResetPasswordDto,
	User
} from './dto/auth.dto'

export const login = async (
	values: LoginFormDTO
): Promise<LoginResponseDTO> => {
	const response = await axios.post('/auth/login', values)
	return response.data
}

export const register = async (
	values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
	try {
		const response = await axios.post('/user', values, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		if (isAxiosError(error)) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				const errorMessage = error.response.data.message
				throw new Error(errorMessage)
			} else {
				throw error
			}
		} else {
			throw error
		}
	}
}

export const getMe = async (): Promise<User> => {
	return (await axios.get('/auth/profile')).data
}

export const logout = () => {
	destroyCookie(null, '_token', { path: '/' })
}

export const resetPassword = async (
	values: ResetPasswordDto
): Promise<User> => {
	try {
		const response = await axios.patch('/user/reset-password', values)
		destroyCookie(null, '_token', { path: '/' })
		return response.data
	} catch (error) {
		if (isAxiosError(error)) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				const errorMessage = error.response.data.message
				throw new Error(errorMessage)
			} else {
				throw error
			}
		} else {
			throw error
		}
	}
}
