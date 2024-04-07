import { proxy } from 'valtio'
import { StateProps } from '../types/state'

const state = proxy<StateProps>({
	user: null,
	movies: null,
	popularMovies: null,
	users: null,
	actors: null
})

export { state }
