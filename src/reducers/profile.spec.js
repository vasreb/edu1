import profile from './profile'
import { init } from './profile'
import * as c from '../constants/constants'

describe('profile test', () => {
	it('GET_PROFILE_REQUEST', () => {
		const action = {
			type: c.GET_PROFILE_REQUEST,
		}

		expect(profile(init, action)).toEqual({
			user: {},
			isLoading: true,
			error: {
				isError: false,
				message: null,
			},
		})
	})
	it('GET_PROFILE_SUCCESS', () => {
		const action = {
			type: c.GET_PROFILE_SUCCESS,
			payload: [1, 1, 1],
		}

		expect(profile(init, action)).toEqual({
			...init,
			isLoading: false,
			user: action.payload,
		})
	})
	it('GET_PROFILE_ERROR', () => {
		const action = {
			type: c.GET_PROFILE_ERROR,
			payload: 'some',
		}
		expect(profile(init, action)).toEqual({
			...init,
			isLoading: false,
			error: {
				isError: true,
				message: action.payload,
			},
		})
	})
})
