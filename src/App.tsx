import React from 'react';
import './App.scss';
import {useRoutes} from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContext} from "./context/auth.context";
import {Navbar} from './components/Navbar';
import {RootStateOrAny, useSelector} from "react-redux";

export const App = () => {

	const isAuth = useSelector((state: RootStateOrAny) => state.auth);
	const routes = useRoutes();

	return (
		<AuthContext.Provider value={isAuth}>
			<Router>
				<Navbar />
				<div className="container">
					{ routes }
				</div>
			</Router>
		</AuthContext.Provider>
	);
}
