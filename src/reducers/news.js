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
	currentPage: 1,
}

export default function news(state = init, action) {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return {
				...state,
				isLoading: true,
				error: {
					isError: false,
					message: null,
				},
			}
		case GET_NEWS_SUCCESS:
			const { articles, totalResults } = action.payload
			return {
				...state,
				articles: state.articles.concat(articles),
				isLoading: false,
				currentPage: state.currentPage + 1,
				totalResults,
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
