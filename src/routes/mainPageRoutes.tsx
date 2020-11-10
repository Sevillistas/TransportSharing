import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RideTypes} from "../rides/RideTypes/RideTypes";

export const useMainPageRoutes = () => {
    return (
        <Switch>
            <Route path='/search' exact>
                <RideTypes/>
            </Route>
            <Route path='/create' exact>
                <p>Create</p>
            </Route>
            <Route path='/history' exact>
                <p>History</p>
            </Route>
        </Switch>
    )
}
