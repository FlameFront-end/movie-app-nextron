export interface LoginFormDTO {
	email: string
	password: string
}

export interface LoginResponseDTO {
	token: string
}

export type RegisterFormDTO = LoginFormDTO
export type RegisterResponseDTO = LoginResponseDTO

export type User = {
	id: number
	email: string
}
