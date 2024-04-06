import { isAxiosError } from 'axios'
import axios from '../../utils/axios'
import { Comment, CreateFormCommentDto } from './comment.dto'

export const create = async (
	comment: CreateFormCommentDto
): Promise<Comment> => {
	try {
		const response = await axios.post('/comments', comment)
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

export const getAlL = async (movieId: number): Promise<Comment[]> => {
	try {
		const response = await axios.get(`/comments/${movieId}`)
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
