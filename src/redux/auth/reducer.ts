import {END_LOADING, SIGN_IN, SIGN_OUT, START_LOADING} from "./types";
import {Action} from "../root.reducer";

export const user = 'user'
const userData = localStorage.getItem(user);
const token = userData ? JSON.parse(userData).token: '';

const initialState = {
    token,
    isAuth: false,
    isLoading: false,
}

export const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SIGN_IN: return {...state, token: action.payload }
        case SIGN_OUT: return {...state, token: '' }
        case START_LOADING: return {...state, isLoading: true}
        case END_LOADING: return {...state, isLoading: false}
        default: return state;
    }
}
