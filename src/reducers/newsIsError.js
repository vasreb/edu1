import { GET_NEWS_REQUEST, GET_NEWS_ERROR } from './../constants/constants'

export default function newsIsError(state = false, action) {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return {
				error: false,
			}
		case GET_NEWS_ERROR:
			return {
				error: true,
				payload: action.payload,
			}
		default:
			return state
	}
}
