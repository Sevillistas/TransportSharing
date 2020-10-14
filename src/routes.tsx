import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>

            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path='/' exact>
                    <SignInPage />
                </Route>
                <Route path='/register' exact>
                    <SignUpPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
}