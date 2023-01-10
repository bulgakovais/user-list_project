import { LOGIN_USER, LOGIN_ERROR, LOGOUT_USER } from "./actions"

const initialState = {
    user: null,
    errors: null
}

export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case (LOGIN_USER): {
            return {
                user: action.payload
            }
        }
        case (LOGOUT_USER): {
            return {
                user: null
            }
        }
        case (LOGIN_ERROR): {
            return {
                user: null,
                errors: action.payload
            }
        }
        default: {
            return state
        }
    }
}
