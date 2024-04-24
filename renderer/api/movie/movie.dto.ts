import { Actor } from '../actor/actor.dto'
import { Comment } from '../comment/comment.dto'

export interface CreateFormMovieDto {
	title: string
	description: string
	actors: number[]
	tags: string[]
	posterImage: File
	mainImage: File
	trailerVideo: File
	mainVideo: File
	onlySubscribe: boolean
}

export interface Movie {
	id: number
	title: string
	description: string
	tags: string[]
	posterImage: string
	mainImage: string
	trailerVideo: string
	mainVideo: string
	actors: Actor[]
	comments: Comment[]
	deleteAt: string | null
	createdAt: string
	updateAt: string
	onlySubscribe: boolean
}
