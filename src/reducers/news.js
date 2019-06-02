import {
	GET_NEWS_REQUEST,
	GET_NEWS_SUCCESS,
	GET_NEWS_ERROR,
} from './../constants/constants'

export const init = {
	articles: [],
	error: {
		isError: false,
		message: null,
	},
	isLoading: false,
}

export default function news(state = init, action) {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return {
				articles: [],
				isLoading: true,
				error: {
					isError: false,
					message: null,
				},
			}
		case GET_NEWS_SUCCESS:
			return {
				...state,
				articles: action.payload,
				isLoading: false,
			}
		case GET_NEWS_ERROR:
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