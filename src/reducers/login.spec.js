import login from './login'
import { init } from './login'
import * as c from '../constants/constants'

describe('login test', () => {
	it('POST_LOGIN_REQUEST', () => {
		const action = {
			type: c.POST_LOGIN_REQUEST,
		}

		expect(login(init, action)).toEqual({
			...init,
			error: {
				isError: false,
				message: null,
			},
		})
	})
	it('POST_LOGIN_SUCCESS', () => {
		const initialState = {
			...init,
			error: {
				isError: false,
				message: null,
			},
		}

		const action = {
			type: c.POST_LOGIN_SUCCESS,
			payload: { id: 1 },
		}

		expect(login(init, action)).toEqual({
			...initialState,
			login: {
				isLogin: true,
				id: action.payload.id,
			},
		})
	})
	it('POST_LOGIN_ERROR', () => {
		const initialState = {
			...init,
			error: {
				isError: false,
				message: null,
			},
		}

		const action = {
			type: c.POST_LOGIN_ERROR,
			payload: 'some_err',
		}
		expect(login(init, action)).toEqual({
			...initialState,
			error: {
				isError: true,
				message: action.payload,
			},
		})
	})
	it('UNLOGIN', () => {
		const initialState = {
			...init,
			error: {
				isError: false,
				message: null,
			},
			login: {
				isLogin: true,
				id: 1,
			},
		}
		const action = {
			type: c.UNLOGIN,
		}
		expect(login(init, action)).toEqual({
			...initialState,
			login: {
				isLogin: false,
			},
		})
	})
})
