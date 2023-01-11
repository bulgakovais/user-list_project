import axios from 'axios';
import { API } from '../storeConstants'
import { nanoid } from 'nanoid'


const logInURL = API + '/login'
const signUpURL = API + '/register'


export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_ERROR = "SET_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "LOGIN_USER";

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logOutUser = (user) => ({
    type: LOGOUT_USER,
    payload: user
});

export const setErrorLogin = (error) => ({
    type: LOGIN_ERROR,
    payload: error
})

export const signUpUser = (user) => ({
    type: SIGNUP_USER,
    payload: user
});


/** 
   * Отправляет запрос к API
   * Регистрирует пользователя, в ответ приходит token и id
   * Записывает в localStorage токен
   * Передает в стор пользователя {token и id} || ошибку
   * @param {string} email - email пользователя
   * @param {string} pass - пароль пользователя
   * @param {object} body - тело запроса
   */
export const LoginUserThunk = (email, pass) => async (dispatch) => {

    const body = {
        email: email,
        password: pass
    }
    try {
        await axios.post(logInURL, body)
            .then((responce) => {
                console.log(responce);
                if (responce.data.token) {
                    const user = {
                        token: responce.data.token,
                        id: nanoid()
                    }
                    console.log(user);
                    localStorage.setItem('token', responce.data.token)

                    dispatch(logInUser(user));
                } else (alert('Что-то пошло не так... Попробуйте еще раз:)'))

            })
    } catch (err) {
        console.log('errLogIn: ', err);
        alert('Такого аккаунта нет, пройдите регистрацию')
        dispatch(setErrorLogin(err.message))
    }

}

/** 
    * Удаляет пользователя из стора
    */
export const logOutUserAction = (dispatch) => {
    dispatch(logOutUser());
};

/** 
      * Отправляет запрос к API
      * Авторизует пользователя, в ответ приходит token
      * Записывает в localStorage токен
      * Передает в стор пользователя {token и id} || ошибку
      * @param {string} email - email пользователя
      * @param {string} pass - пароль пользователя
      * @param {object} body - тело запроса
      */
export const SignUpUserThunk = (email, pass) => async (dispatch) => {
    const body = {
        email: email,
        password: pass
    }
    try {
        await axios.post(signUpURL, body)
            .then((responce) => {
                console.log(responce);
                const user = {
                    token: responce.data.token,
                    id: responce.data.id
                }
                localStorage.setItem('token', responce.data.token)
                dispatch(signUpUser(user))

            })
    } catch (err) {
        console.log('errSignUp: ', err);
        alert('Воспользуйтесь следующим тестовым аккаунтом: Email:"eve.holt@reqres.in"')
        dispatch(setErrorLogin(err.message))
    }

}

