import { isAxiosError } from 'axios'
import axios from '../../utils/axios'
import { CreateFormMovieDto, CreateResponseMovieDto } from './movie.dto'

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

export const getAll = async (): Promise<CreateResponseMovieDto[]> => {
	try {
		const response = await axios.get('/movies')
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

export const getAllPopular = async (): Promise<CreateResponseMovieDto[]> => {
	try {
		const response = await axios.get('/movies/popular')
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

export const getMovieById = async (
	movieId: number
): Promise<CreateResponseMovieDto> => {
	try {
		const response = await axios.get(`/movies/${movieId}`)
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

export const getMovieByTitle = async (
	title: string
): Promise<CreateResponseMovieDto[]> => {
	try {
		const response = await axios.get(`/movies/search?title=${title}`)
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

export const remove = async (id: number): Promise<CreateResponseMovieDto> => {
	try {
		const response = await axios.delete(`/movies/${id}`)
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
