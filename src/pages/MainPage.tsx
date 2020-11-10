import React from 'react';
import {NavLink} from "react-router-dom";
import './styles/MainPage.scss';
import {useMainPageRoutes} from "../routes/mainPageRoutes";
import {PlannedRides} from "../rides/PlannedRides/PlannedRides";

export const MainPage = () => {

    const routes = useMainPageRoutes();

    return(
        <div className='main-page'>
            <div className="main-page__left">
                <nav className="main-page__nav">
                    <ul>
                        <li>
                            <NavLink to='/search' activeClassName="main-page__link-active">Найти поездку</NavLink>
                        </li>
                        <li>
                            <NavLink to='/create' activeClassName="main-page__link-active">Предложить поездку</NavLink>
                        </li>
                        <li>
                            <NavLink to='/history' activeClassName="main-page__link-active">История поездок</NavLink>
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
