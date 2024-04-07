import { Movie } from '../index'

export interface LoginFormDTO {
	email: string
	password: string
}

export interface RegisterFormDTO {
	nick: string
	email: string
	password: string
	password_confir: string
	ava: File
}

export interface ResetPasswordDto {
	old_password: string
	new_password: string
}

export interface LoginResponseDTO {
	token: string
}

export type RegisterResponseDTO = LoginResponseDTO

export interface User {
	id: number
	email: string
	nick: string
	ava: string
	password: string
	isAdmin: boolean
	createdAt: string
	favorites: Movie[]
}
