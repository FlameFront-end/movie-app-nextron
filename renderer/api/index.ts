import { Actor, CreateActorDTO } from './actor/actor.dto'
import {
	LoginFormDTO,
	LoginResponseDTO,
	RegisterFormDTO,
	RegisterResponseDTO,
	ResetPasswordDto,
	User
} from './auth/auth.dto'
import { Comment, CreateFormCommentDto } from './comment/comment.dto'
import { CreateFormMovieDto, Movie } from './movie/movie.dto'

export * as auth from './auth'
export * as movie from './movie'
export * as actor from './actor'
export * as socket from './socket'
export * as user from './user'
export * as comment from './comment'

export type {
	CreateFormMovieDto,
	Movie,
	Comment,
	CreateFormCommentDto,
	LoginFormDTO,
	LoginResponseDTO,
	User,
	RegisterFormDTO,
	ResetPasswordDto,
	RegisterResponseDTO,
	Actor,
	CreateActorDTO
}
