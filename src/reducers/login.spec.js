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
		const action = {
			type: c.POST_LOGIN_SUCCESS,
			payload: { id: 1 },
		}

		expect(login(init, action)).toEqual({
			...init,
			login: {
				isLogin: true,
				id: action.payload.id,
			},
		})
	})
	it('POST_LOGIN_ERROR', () => {
		const action = {
			type: c.POST_LOGIN_ERROR,
			payload: 'some_err',
		}
		expect(login(init, action)).toEqual({
			...init,
			error: {
				isError: true,
				message: action.payload,
			},
		})
	})
	it('UNLOGIN', () => {
		const action = {
			type: c.UNLOGIN,
		}
		expect(login(init, action)).toEqual({
			...init,
			login: {
				isLogin: false,
			},
		})
	})
})
