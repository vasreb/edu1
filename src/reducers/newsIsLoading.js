import {
    GET_NEWS_REQUEST, 
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR
} from './../constants/constants';

export default function photos(state=false, action) {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return true
        case GET_NEWS_SUCCESS:
            return false
        case GET_NEWS_ERROR:
            return false
        default:
            return state;
    }
}