export interface CreateFormMovieDto {
	title: string
	description: string
	posterImage: File
	mainImage: File
	trailerVideo: File
	mainVideo: File
	actors: string[]
}

export interface CreateResponseMovieDto {
	title: string
	description: string
	actors: string
	posterImage: string
	mainImage: string
	trailerVideo: string
	mainVideo: string
	deleteAt: string | null
	id: number
	createdAt: string
	updateAt: string
}
