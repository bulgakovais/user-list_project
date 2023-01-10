import { SET_USERS, SET_USERS_ERROR } from './actions'

const initialState = {
    users: [],
    usersError: null
}

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USERS: {
            return {
                ...state,
                users: payload,
                usersError: null,
            };
        }
        case SET_USERS_ERROR: {
            return {
                ...state,
                usersError: payload,
            };
        }
        default:
            return state;
    }
}