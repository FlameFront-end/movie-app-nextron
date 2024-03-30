import { proxy } from 'valtio'
import { StateProps } from '../types/state'

const state = proxy<StateProps>({
	user: null
})

export { state }
