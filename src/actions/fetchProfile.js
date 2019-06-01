import {
    GET_PROFILE_REQUEST, 
    GET_PROFILE_SUCCESS, 
    GET_PROFILE_ERROR
} from './../constants/constants';

export default function fetchProfile(id) {
    return async dispatch => {
        dispatch({
            type: GET_PROFILE_REQUEST
        })
        try {
            let res = await fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
            res = await res.json();
            if (res.status === 'ok') {
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: res.data
                })
            } else {
                throw new Error(res.message)
            }
        }   
        catch (err) {
            dispatch({
                type: GET_PROFILE_ERROR,
                payload: err.message,
            })
        }
    }
}