import {
	GET_NEWS_REQUEST,
	GET_NEWS_SUCCESS,
	GET_NEWS_ERROR,
	newsEndpoint,
} from './../constants/constants'

export default function fetchNews() {
	return async dispatch => {
		dispatch({
			type: GET_NEWS_REQUEST,
		})
		try {
			let res = await fetch(newsEndpoint)
			res = await res.json()
			if (res.status === 'ok') {
				res = res.articles.map(article => {
					const { title, description, publishedAt, url } = article
					return {
						title,
						id: publishedAt,
						text: description,
						url,
					}
				})
				dispatch({
					type: GET_NEWS_SUCCESS,
					payload: res,
				})
			} else {
				throw new Error(res.status)
			}
		} catch (err) {
			dispatch({
				type: GET_NEWS_ERROR,
				payload: err,
			})
		}
	}
}
