import {
    POST_LOGIN_REQUEST, 
    POST_LOGIN_ERROR
} from './../constants/constants';

export default function loginisError(state={error: false}, action) {
    switch (action.type) {
        case POST_LOGIN_REQUEST:
            return {
                error: false
            }
        case POST_LOGIN_ERROR:
            return {
                error: true,
                payload: action.payload
            }
        default:
            return state;
    }
}