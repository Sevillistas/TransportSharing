import React from 'react';
import './App.scss';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export const App = () => {

const routes = useRoutes(false);

return (
	<Router>
		<Navbar />
		<div className="container">
			{ routes }
		</div>
	</Router>
);}
