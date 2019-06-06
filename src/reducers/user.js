import {
	GET_PROFILE_REQUEST,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR,
} from '../constants/constants'

export default function profile(state = {}, action) {
	switch (action.type) {
		case GET_PROFILE_REQUEST:
			return {}
		case GET_PROFILE_SUCCESS:
			return Object.assign({}, action.payload)
		case GET_PROFILE_ERROR:
			return {}
		default:
			return state
	}
}
