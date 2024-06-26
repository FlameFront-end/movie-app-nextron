import { Actor } from '../api/actor/actor.dto'
import { User } from '../api/auth/auth.dto'
import { CreateResponseMovieDto } from '../api/movie/movie.dto'

export interface StateProps {
	user: User
	movies: CreateResponseMovieDto[] | null
	popularMovies: CreateResponseMovieDto[] | null
	searchMovies: CreateResponseMovieDto[] | null
	users: User[] | null
	actors: Actor[] | null
}
