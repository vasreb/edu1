import {
	GET_PROFILE_REQUEST,
	GET_PROFILE_ERROR,
} from './../constants/constants'

export default function photos(state = false, action) {
	switch (action.type) {
		case GET_PROFILE_REQUEST:
			return {
				error: false,
			}
		case GET_PROFILE_ERROR:
			return {
				error: true,
				payload: action.payload,
			}
		default:
			return state
	}
}
