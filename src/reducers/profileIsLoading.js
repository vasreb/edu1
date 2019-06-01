import {
    GET_PROFILE_REQUEST, 
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR
} from './../constants/constants';

export default function photos(state=false, action) {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return true
        case GET_PROFILE_SUCCESS:
            return false
        case GET_PROFILE_ERROR:
            return false
        default:
            return state;
    }
}