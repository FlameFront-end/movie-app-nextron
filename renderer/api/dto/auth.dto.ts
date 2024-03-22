export interface LoginFormDTO {
	email: string
	password: string
}

export interface RegisterFormDTO {
	email: string
	password: string
	image: []
}

export interface LoginResponseDTO {
	token: string
}

export type RegisterResponseDTO = LoginResponseDTO

export type User = {
	id: number
	email: string
}
