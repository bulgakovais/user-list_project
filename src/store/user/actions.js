import axios from 'axios';
import { usersURL } from '../storeConstants'


export const SET_USER = 'SET_USER'
export const SET_USER_ERROR = 'SET_USER_ERROR'


export const setUserToId = (user) => ({
    type: SET_USER,
    payload: user
});

export const setErrorUserToId = (error) => ({
    type: SET_USER_ERROR,
    payload: error
})

export const getUserToId = (id) => async (dispatch) => {
    try {
        await axios.get(`${usersURL}/${id}`)
            .then((responce) => {
                dispatch(setUserToId(responce.data.data))
            })
    } catch (err) {
        dispatch(setErrorUserToId(err.message))
    }
}