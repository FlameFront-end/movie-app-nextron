import axios from '../../utils/axios'
import { User } from '../auth/auth.dto'

export const getAll = async (): Promise<User[]> => {
	const response = await axios.get('/user')
	return response.data
}
