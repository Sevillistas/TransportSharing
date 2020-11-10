import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RideTypes} from "../rides/RideTypes/RideTypes";

export const useMainPageRoutes = () => {
    return (
        <Switch>
            <Route path='/main/search' exact>
                <RideTypes/>
            </Route>
            <Route path='/main/create' exact>
                <p>Create</p>
            </Route>
            <Route path='/main/history' exact>
                <p>History</p>
            </Route>
        </Switch>
    )
}
