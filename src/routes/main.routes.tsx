import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RideTypes} from "../rides/RideTypes/RideTypes";
import {SearchRides} from "../rides/SearchRides/SearchRides";
import {SearchResult} from "../rides/SearchResult/SearchResult";

export const useMainRoutes = () => {
    return (
        <Switch>
            <Route path='/main' exact>
                <p>Main</p>
            </Route>
            <Route path='/main/search' exact>
                <RideTypes/>
            </Route>
            <Route path='/main/search-form'  exact>
                <SearchRides/>
            </Route>
            <Route path='/main/search-results' exact>
                <SearchResult/>
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
