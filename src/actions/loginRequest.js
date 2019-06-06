import axios from 'axios'

import {
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_ERROR,
} from './../constants/constants'

const loginRequest = state => {
	const { email, password } = state
	return async dispatch => {
		//sync validate

		if (!email) {
			dispatch({
				type: POST_LOGIN_ERROR,
				payload: 'sync_email_undefined',
			})
			return
		}
		if (!password) {
			dispatch({
				type: POST_LOGIN_ERROR,
				payload: 'sync_password_undefined',
			})
			return
		}

		//async

		dispatch({
			type: POST_LOGIN_REQUEST,
		})
		try {
			let res = await axios.post(
				'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
				{
					email,
					password,
				}
			)
			if (res.data.status === 'ok') {
				dispatch({
					type: POST_LOGIN_SUCCESS,
					payload: res.data.data,
				})
			} else throw new Error(res.data.message)
		} catch (err) {
			dispatch({
				type: POST_LOGIN_ERROR,
				payload: err.message,
			})
		}
	}
}

export default loginRequest
