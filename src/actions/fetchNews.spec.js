import {
	GET_NEWS_REQUEST,
	GET_NEWS_SUCCESS,
	GET_NEWS_ERROR,
} from './../constants/constants'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchNews from './fetchNews'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const mockStore = configureMockStore([thunk])

describe('fetch news', () => {
	describe('asyncs', () => {
		afterEach(() => {
			fetchMock.reset()
		})
		it('GET_NEWS_SUCCESS', async () => {
			const totalResults = 1
			const article = {
				title: 'fdfas',
				description: 'fasfasfafs',
				publishedAt: 'fsaffas',
				url: 'fsafaasa',
				urlToImage: 'kfkacskca',
			}
			fetchMock.getOnce(
				`https://newsapi.org/v2/everything?language=ru&sources=google-news-ru&page=1&apiKey=bff07d240dcc49b795616f104a9c55f9`,
				{
					headers: { 'content-type': 'application/json' },
					body: { totalResults, articles: [article], status: 'ok' },
				}
			)
			const expectedActions = [
				{
					type: GET_NEWS_REQUEST,
				},
				{
					type: GET_NEWS_SUCCESS,
					payload: {
						totalResults,
						articles: [
							{
								title: 'fdfas',
								id: 'fsaffas',
								text: 'fasfasfafs',
								url: 'fsafaasa',
								urlToImage: 'kfkacskca',
							},
						],
					}, // в ожидании важно указать теже данные, что были указаны выше в моке запроса
				},
			]

			const store = mockStore({})

			await store.dispatch(fetchNews()).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
		it('GET_NEWS_ERROR', async () => {
			fetchMock.getOnce(
				`https://newsapi.org/v2/everything?language=ru&sources=google-news-ru&page=1&apiKey=bff07d240dcc49b795616f104a9c55f9`,
				{
					headers: { 'content-type': 'application/json' },
					body: { status: 'err', message: 'oh sh' },
				}
			)
			const expectedActions = [
				{
					type: GET_NEWS_REQUEST,
				},
				{
					type: GET_NEWS_ERROR,
					payload: 'oh sh', // в ожидании важно указать теже данные, что были указаны выше в моке запроса
				},
			]
			const store = mockStore({})
			await store.dispatch(fetchNews()).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
})
