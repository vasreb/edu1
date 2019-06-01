import { combineReducers } from 'redux'
import articles from './articles'
import newsIsError from './newsIsError'
import newsIsLoading from './newsIsLoading'

import profile from './profile'
import profileIsError from './profileIsError'
import profileIsLoading from './profileIsLoading'
import login from './login'
import loginIsError from './loginIsError'

export default combineReducers({
	articles,
	newsIsLoading,
	newsIsError,

	profile,
	profileIsLoading,
	profileIsError,

	login,
	loginIsError,
})
