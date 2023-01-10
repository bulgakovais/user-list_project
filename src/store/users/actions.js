import axios from 'axios';
import { usersURL } from '../storeConstants'


export const SET_USERS = 'SET_USERS'
export const SET_USERS_ERROR = 'SET_USERS_ERROR'


export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const setErrorUsers = (error) => ({
    type: SET_USERS_ERROR,
    payload: error
})

/** 
       * Отправляет запрос к API
       * Получает список пользователей
       * Передает в стор список || ошибку
       */
export const getUsers = () => async (dispatch) => {
    try {
        await axios.get(usersURL)
            .then((responce) => {
                dispatch(setUsers(responce.data))
            })
    } catch (err) {
        dispatch(setErrorUsers(err.message))
    }

}

