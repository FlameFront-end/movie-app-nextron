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

export interface LoginResponseDTO {
	token: string
}

export type RegisterResponseDTO = LoginResponseDTO

export type User = {
	id: number
	email: string
	nick: string
	ava: string
}
