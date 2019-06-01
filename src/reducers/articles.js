import {
    GET_NEWS_REQUEST, 
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR
} from './../constants/constants';

export default function articles(state=[], action) {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return []
        case GET_NEWS_SUCCESS:
            return [].concat(action.payload)
        case GET_NEWS_ERROR:
            return []
        default:
            return state;
    }
}