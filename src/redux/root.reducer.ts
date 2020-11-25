import {combineReducers} from "redux";
import {authReducer} from "./auth/reducer";

export interface Action {
    type: string;
    payload?: any;
}

export const rootReducer = combineReducers({
    auth: authReducer
});
