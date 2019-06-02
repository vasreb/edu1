import {
	GET_NEWS_REQUEST,
	GET_NEWS_SUCCESS,
	GET_NEWS_ERROR,
} from './../constants/constants'

export default function fetchNews(page = 1) {
	return async dispatch => {
		dispatch({
			type: GET_NEWS_REQUEST,
		})
		try {
			let res = await fetch(
				`https://newsapi.org/v2/everything?language=ru&sources=google-news-ru&page=${page}&apiKey=bff07d240dcc49b795616f104a9c55f9`
			)
			res = await res.json()
			if (res.status === 'ok') {
				const { totalResults } = res
				const articles = res.articles.map(article => {
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
					payload: {
						totalResults,
						articles,
					},
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
