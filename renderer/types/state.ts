import { User } from '../api/auth/auth.dto'
import { CreateResponseMovieDto } from '../api/movie/movie.dto'

export interface StateProps {
	user: User
	movies: CreateResponseMovieDto[] | null
	popularMovies: CreateResponseMovieDto[] | null
}
