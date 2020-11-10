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
                <Route path='/main' component={MainPage}/>
                <Route path='/login' exact>
                    <SignInPage />
                </Route>
                <Route path='/register' exact>
                    <SignUpPage />
                </Route>
                <Route path='/success' exact>
                    <SignInSuccessPage />
                </Route>
                <Redirect to='/main' />
            </Switch>
        )
    }
}
