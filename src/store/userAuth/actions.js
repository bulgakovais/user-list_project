import axios from 'axios';
import { API } from '../storeConstants'



const logInURL = API + '/register'

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_ERROR = "SET_ERROR";

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const setErrorAction = (error) => ({
    type: LOGIN_ERROR,
    payload: error
})

export const LoginUserThunk = (email, pass) => async (dispatch) => {
    const body = {
        email: email,
        password: pass
    }
    console.log(body);
    try {
        await axios.post(logInURL, body)
            .then((response) => {
                console.log(response);
                const user = {
                    token: response.data.token,
                    id: response.data.id
                };
                dispatch(logInUser(user));
            })
    } catch (err) { dispatch(setErrorAction(err.message)) }

}