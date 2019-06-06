import {
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_ERROR,
} from './../constants/constants'
import loginRequest from './loginRequest'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mockStore = configureMockStore([thunk])

describe('login request, sync and async validate', () => {
	describe('sync validate', () => {
		const formState = {
			email: '',
			password: '',
		}
		it('sync email validate', async () => {
			const store = mockStore({})

			const expectedActions = [
				{
					type: POST_LOGIN_ERROR,
					payload: 'sync_email_undefined',
				},
			]

			await store.dispatch(loginRequest(formState)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
		it('sync password validate', async () => {
			const formState = {
				email: 'some',
				password: '',
			}
			const store = mockStore({})

			const expectedActions = [
				{
					type: POST_LOGIN_ERROR,
					payload: 'sync_password_undefined',
				},
			]

			await store.dispatch(loginRequest(formState)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
	describe('async', () => {
		const mock = new MockAdapter(axios)
		afterEach(() => {
			mock.reset()
			mock.restore()
		})
		it('POST_LOGIN_SUCCESS', async () => {
			const mock = new MockAdapter(axios)
			const formState = {
				email: 'correct email',
				password: 'correct password',
			}
			mock
				.onPost(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate`, {
					email: 'correct email',
					password: 'correct password',
				})
				.replyOnce(200, {
					status: 'ok',
					data: {
						id: 228,
					},
				})
			const store = mockStore({})
			const expectedActions = [
				{
					type: POST_LOGIN_REQUEST,
				},
				{
					type: POST_LOGIN_SUCCESS,
					payload: {
						id: 228,
					},
				},
			]
			await store.dispatch(loginRequest(formState)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
		it('POST_LOGIN_ERROR', async () => {
			const mock = new MockAdapter(axios)
			const formState = {
				email: 'incorrect email',
				password: 'incorrect password',
			}
			mock
				.onPost(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate`, {
					email: 'incorrect email',
					password: 'incorrect password',
				})
				.replyOnce(200, {
					status: 'err',
					message: 'bad error',
				})
			const store = mockStore({})
			const expectedActions = [
				{
					type: POST_LOGIN_REQUEST,
				},
				{
					type: POST_LOGIN_ERROR,
					payload: 'bad error',
				},
			]
			await store.dispatch(loginRequest(formState)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
})
