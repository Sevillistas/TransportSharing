import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RideTypes} from "../rides/RideTypes/RideTypes";
import {SearchRides} from "../rides/SearchRides/SearchRides";
import {SearchResult} from "../rides/SearchResult/SearchResult";
import {CreateRide} from "../rides/CreateRide/CreateRide";
import {CreateRideSuccess} from "../rides/CreateRideSuccess/CreateRideSuccess";
import {DetailRideCard} from "../rides/DetailRideCard/DetailRideCard";

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
            <Route path='/main/ride/0290065f-3e8e-47f7-9511-f5a9a96b1a41'>
                <DetailRideCard />
            </Route>
            <Route path='/main/create' exact>
                <CreateRide />
            </Route>
            <Route path='/main/create-success' exact>
                <CreateRideSuccess />
            </Route>
            <Route path='/main/history' exact>
                <p>History</p>
            </Route>
        </Switch>
    )
}
