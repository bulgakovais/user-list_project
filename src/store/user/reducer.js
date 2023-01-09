import { SET_USER, SET_USER_ERROR } from './actions'

const initialState = {
    user: {},
    userError: null
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER: {
            return {
                ...state,
                user: payload,
                userError: null,
            };
        }
        case SET_USER_ERROR: {
            return {
                ...state,
                userError: payload,
            };
        }
        default:
            return state;
    }
}