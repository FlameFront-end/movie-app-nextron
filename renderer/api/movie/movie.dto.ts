import { Actor } from '../actor/actor.dto'

export interface CreateFormMovieDto {
	title: string
	description: string
	actors: number[]
	tags: string[]
	posterImage: File
	mainImage: File
	trailerVideo: File
	mainVideo: File
}

export interface CreateResponseMovieDto {
	id: number
	title: string
	description: string
	actors: Actor[]
	tags: string[]
	posterImage: string
	mainImage: string
	trailerVideo: string
	mainVideo: string
	deleteAt: string | null
	createdAt: string
	updateAt: string
}
