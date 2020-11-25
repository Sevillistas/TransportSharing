import React from 'react';
import './styles/Navbar.scss'
import {useHistory} from "react-router";
import {Button} from "./Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {signOut} from "../redux/auth/actions";

export const Navbar = () => {

    const dispatch = useDispatch();
    const { token } = useSelector((state: RootStateOrAny) => state.auth);

    const history = useHistory();
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => history.push('/')}>
                    Transport<br/>
                    Sharing
                </div>
                { token && <Button text='Выйти' type='default' action={() => dispatch(signOut())} /> }
            </div>
        </nav>
    )
}
