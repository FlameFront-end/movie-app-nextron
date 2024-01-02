import { AxiosError, isAxiosError } from 'axios'
import { destroyCookie } from 'nookies'

import axios from '../core/axios'

import {
	LoginFormDTO,
	LoginResponseDTO,
	RegisterFormDTO,
	RegisterResponseDTO,
	User
} from './dto/auth.dto'

export const login = async (
	values: LoginFormDTO
): Promise<LoginResponseDTO> => {
	return (await axios.post('/auth/login', values)).data
}

export const register = async (
	values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
	try {
		const response = await axios.post('/user', values)
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
