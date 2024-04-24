import axios from '../../utils/axios'
import { User } from '../auth/auth.dto'
import { Movie } from '../movie/movie.dto'

export const getAll = async (): Promise<User[]> => {
	const response = await axios.get('/user')
	return response.data
}

export const addToFavorites = async (movieId: number): Promise<Movie> => {
	const response = await axios.post(`/user/favorites/${movieId}`)
	return response.data
}

export const deleteFavorites = async (movieId: number): Promise<Movie> => {
	const response = await axios.delete(`/user/favorites/${movieId}`)
	return response.data
}

export const byuSubscribe = async (): Promise<User> => {
	const response = await axios.post(`/user/buy`)
	return response.data
}
