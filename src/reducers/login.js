import {
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_ERROR,
	UNLOGIN,
} from './../constants/constants'

export const init = {
	login: {
		isLogin: false,
		id: null,
	},
	error: {
		isError: false,
		message: null,
	},
}

export default function login(state = init, action) {
	switch (action.type) {
		case POST_LOGIN_REQUEST:
			return {
				...init,
				error: {
					isError: false,
					message: null,
				},
			}
		case POST_LOGIN_SUCCESS:
			return {
				...init,
				login: {
					isLogin: true,
					id: action.payload.id,
				},
			}
		case POST_LOGIN_ERROR:
			return {
				...init,
				error: {
					isError: true,
					message: action.payload,
				},
			}
		case UNLOGIN:
			return {
				...init,
				login: {
					isLogin: false,
				},
			}
		default:
			return state
	}
}
