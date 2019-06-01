import {
    //POST_LOGIN_REQUEST, 
    POST_LOGIN_SUCCESS,
    //POST_LOGIN_ERROR,
    UNLOGIN
} from './../constants/constants';

export default function login(state={
    isLogin: false
}, action) {
    switch (action.type) {
        case POST_LOGIN_SUCCESS:
            return Object.assign({isLogin: true}, action.payload);
        case UNLOGIN:
            return {
                isLogin: false
            }
        default:
            return state;
    }
}

