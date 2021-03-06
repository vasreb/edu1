import {
	GET_PROFILE_REQUEST,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR,
} from '../constants/constants'

export const init = {
	user: {},
	error: {
		isError: false,
		message: null,
	},
	isLoading: false,
}

export default function profile(state = init, action) {
	switch (action.type) {
		case GET_PROFILE_REQUEST:
			return {
				...state,
				user: {},
				isLoading: true,
				error: {
					isError: false,
					message: null,
				},
			}
		case GET_PROFILE_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: action.payload,
			}
		case GET_PROFILE_ERROR:
			return {
				...state,
				isLoading: false,
				error: {
					isError: true,
					message: action.payload,
				},
			}
		default:
			return state
	}
}
