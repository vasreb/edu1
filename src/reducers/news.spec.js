import news from './news'
import { init } from './news'
import * as c from '../constants/constants'

describe('articles test', () => {
	it('GET_NEWS_REQUEST', () => {
		const action = {
			type: c.GET_NEWS_REQUEST,
		}

		expect(news(init, action)).toEqual({
			articles: [],
			isLoading: true,
			error: {
				isError: false,
				message: null,
			},
		})
	})
	it('GET_NEWS_SUCCESS', () => {
		const action = {
			type: c.GET_NEWS_SUCCESS,
			payload: [1, 1, 1],
		}

		expect(news(init, action)).toEqual({
			...init,
			isLoading: false,
			articles: action.payload,
		})
	})
	it('GET_NEWS_ERROR', () => {
		const action = {
			type: c.GET_NEWS_ERROR,
			payload: 'some',
		}
		expect(news(init, action)).toEqual({
			...init,
			isLoading: false,
			error: {
				isError: true,
				message: action.payload,
			},
		})
	})
})
