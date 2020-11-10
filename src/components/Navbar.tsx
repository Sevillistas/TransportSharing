import React from 'react';
import './styles/Navbar.scss'
import {useHistory} from "react-router";

export const Navbar = () => {

    const history = useHistory();
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => history.push('/')}>
                    Transport<br/>
                    Sharing
                </div>
            </div>
        </nav>
    )
}
