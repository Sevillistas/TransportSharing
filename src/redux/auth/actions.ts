import {END_LOADING, SIGN_IN, SIGN_OUT, START_LOADING} from "./types";
import {user} from "./reducer";

export const signIn = (login: string, password: string) => {
    // @ts-ignore
    return async dispatch => {
        try {
            dispatch({type: START_LOADING})
            const responseObj = { token: '123', userId: '123' };
            // const { token, userId } = await request('/login', 'POST', {login, password});
            const { token, userId } = responseObj;
            dispatch({type: END_LOADING});
            dispatch(signInLocal(token, userId));
        } catch (error) {
            dispatch({type: END_LOADING})
            console.log(error);
        }
    }
}

export const signInLocal = (token: string, userId: string) => {
    // @ts-ignore
    return dispatch => {
        console.log('signInLocal');
        localStorage.setItem(user, JSON.stringify({
            token,
            userId
        }));
        dispatch({type: SIGN_IN, payload: token});
    }
}

export const signOut = () => {
    // @ts-ignore
    return dispatch => {
        localStorage.removeItem(user);
        dispatch({type: SIGN_OUT})
    }
}


