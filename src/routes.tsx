import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {SignInPage} from './pages/SignInPage';
import {SignUpPage} from './pages/SignUpPage';
import {SignInSuccessPage} from "./pages/SignInSuccessPage";
import {MainPage} from "./pages/MainPage";
import {RootStateOrAny, shallowEqual, useSelector} from "react-redux";

export const useRoutes = () => {

    const token = useSelector((state: RootStateOrAny) => state.auth.token, shallowEqual);

    if (token) {
        return (
            <Switch>
                <Route path='/' exact>
                    <h1>Рофлан</h1>
                </Route>
                <Route path='/main' exact>
                    <h1>Main</h1>
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path='/login' component={SignInPage} exact />
                <Route path='/main' component={MainPage} />
                <Route path='/register' component={SignUpPage}  exact />
                <Route path='/success' component={SignInSuccessPage}  exact />
                <Redirect to='/login' />
            </Switch>
        )
    }
}
