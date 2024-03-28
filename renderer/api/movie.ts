import { isAxiosError } from 'axios'
import axios from '../utils/axios'
import { CreateFormMovieDto, CreateResponseMovieDto } from './dto/movie.dto'

export const create = async (
	movie: CreateFormMovieDto
): Promise<CreateResponseMovieDto> => {
	try {
		const response = await axios.post('/movies', movie, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		if (isAxiosError(error)) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				const errorMessage = error.response.data.message
				throw new Error(errorMessage)
			} else {
				throw error
			}
		} else {
			throw error
		}
	}
}
