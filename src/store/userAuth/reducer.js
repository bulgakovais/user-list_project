import { LOGIN_USER, LOGIN_ERROR } from "./actions"

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
        case (LOGIN_ERROR): {
            return {
                ...state,
                errors: action.payload
            }
        }
        default: {
            return state
        }
    }
}
