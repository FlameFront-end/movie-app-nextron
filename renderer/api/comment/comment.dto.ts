import { User } from '../auth/auth.dto'

export interface CreateFormCommentDto {
	movieId: number
	userId: number
	text: string
}

export interface Comment {
	id: number
	text: string
	user: User
	createdAt: string
}
