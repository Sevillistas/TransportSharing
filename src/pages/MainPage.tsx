import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useRouteMatch} from "react-router-dom";
import './styles/MainPage.scss';
import {useMainRoutes} from "../routes/main.routes";
import {PlannedRides} from "../rides/PlannedRides/PlannedRides";
import {useHistory} from 'react-router';
import {Button} from '../components/Button';

export const MainPage = () => {

    const routes = useMainRoutes();
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation<any>();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        console.log('palevo');
        history.push('/main/search');
    }, []);

    useEffect(() => {
        if (location.state && location.state.auth) {
            setAuth(location.state.auth);
            history.push('/main/search-results');
        }
    }, [location.state]);

    const Tabs = () => {
        return (
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
        )
    }

    return(
        <div className='main-page'>
            <div className="main-page__left">
                <Tabs />
                <div className="main-page__content">
                    { routes }
                </div>
            </div>
            <div className="main-page__right">
                { location.pathname.includes('results') && !auth &&
                    <>
                        <div className='qstl__title'>Войдите или зарегистрируйтесь,<br/> чтобы присоединиться к поездке или создать свою</div>
                        <Button text='Перейти' type='default' action={() => setTimeout(() => history.push('/login'), 135)} />
                    </>
                }
                { auth && <>
                    <div className="main-page__right__header">Предстоящие поездки</div>
                    { (!location.pathname.includes('results') && !location.pathname.includes('/ride/')) && <PlannedRides/> }
                </> }
            </div>
        </div>
    )
}
