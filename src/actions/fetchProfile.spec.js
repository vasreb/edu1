import {
	GET_PROFILE_REQUEST,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR,
} from './../constants/constants'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchProfile from './fetchProfile'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const mockStore = configureMockStore([thunk])

describe('fetch profile', () => {
	describe('asyncs', () => {
		afterEach(() => {
			fetchMock.reset()
		})
		it('GET_PROFILE_SUCCESS', async () => {
			fetchMock.getOnce(
				`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1`,
				{
					headers: { 'content-type': 'application/json' },
					body: { data: [1, 2, 3], status: 'ok' },
				}
			)
			const expectedActions = [
				{
					type: GET_PROFILE_REQUEST,
				},
				{
					type: GET_PROFILE_SUCCESS,
					payload: [1, 2, 3], // в ожидании важно указать теже данные, что были указаны выше в моке запроса
				},
			]

			const store = mockStore({})

			await store.dispatch(fetchProfile(1)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
		it('GET_PROFILE_ERROR', async () => {
			fetchMock.getOnce(
				`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1`,
				{
					headers: { 'content-type': 'application/json' },
					body: { status: 'err', message: 'oh sh' },
				}
			)
			const expectedActions = [
				{
					type: GET_PROFILE_REQUEST,
				},
				{
					type: GET_PROFILE_ERROR,
					payload: 'oh sh', // в ожидании важно указать теже данные, что были указаны выше в моке запроса
				},
			]
			const store = mockStore({})

			await store.dispatch(fetchProfile(1)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
})
