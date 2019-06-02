import { combineReducers } from 'redux'
import news from './news'
import profile from './profile'
import login from './login'

export default combineReducers({
	news,
	profile,
	login,
})
