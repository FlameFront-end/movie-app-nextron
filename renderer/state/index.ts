import { proxy } from 'valtio'
import { StateProps } from './state'

const state = proxy<StateProps>({
	user: null
})

export { state }
