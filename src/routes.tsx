import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {SignInPage} from './pages/SignInPage';
import {SignUpPage} from './pages/SignUpPage';
import {SignInSuccessPage} from "./pages/SignInSuccessPage";
import {MainPage} from "./pages/MainPage";

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>

            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path='/main' component={MainPage} />
                <Route path='/login' component={SignInPage} exact />
                <Route path='/register' component={SignUpPage}  exact />
                <Route path='/success' component={SignInSuccessPage}  exact />
                <Redirect to='/main' />
            </Switch>
        )
    }
}
