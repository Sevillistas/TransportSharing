import React from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";
import './styles/MainPage.scss';
import {useMainRoutes} from "../routes/main.routes";
import {PlannedRides} from "../rides/PlannedRides/PlannedRides";

export const MainPage = () => {

    const routes = useMainRoutes();
    const { url } = useRouteMatch();

    return(
        <div className='main-page'>
            <div className="main-page__left">
                <nav className="main-page__nav">
                    <ul>
                        <li>
                            <NavLink to={`${url}/search`}  activeClassName="main-page__link-active">Найти поездку</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/create`} activeClassName="main-page__link-active">Предложить поездку</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/history`} activeClassName="main-page__link-active">История поездок</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="main-page__content">
                    { routes }
                </div>
            </div>
            <div className="main-page__right">
                <div className="main-page__right">
                    <div className="main-page__right__header">Предстоящие поездки</div>
                    <PlannedRides/>
                </div>
            </div>
        </div>
    )
}
