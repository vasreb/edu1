import {
    GET_NEWS_REQUEST, 
    GET_NEWS_SUCCESS, 
    GET_NEWS_ERROR
} from './../constants/constants';

export default function fetchNews() {
    return async dispatch => {
        dispatch({
            type: GET_NEWS_REQUEST
        })
        try {
            let res = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news')
            res = await res.json();
            if (res.status === 'ok') {
                dispatch({
                    type: GET_NEWS_SUCCESS,
                    payload: res.data
                })
            } else {
                throw new Error(res.status)
            }
        }   
        catch (err) {
            dispatch({
                type: GET_NEWS_ERROR,
                payload: err,
            })
        }
    }
}