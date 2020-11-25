import React, {useCallback, useState} from 'react';
import {Button, ButtonParams} from './Button';
import './styles/SignInForm.scss';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {signIn} from "../redux/auth/actions";

export const SignInForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const validateForm = useCallback(() => {
        //TODO
        let valid = false;
        if (login) {
            valid = true;
        } else {
            valid = false;
        }
        if (password && password.length >= 8) {
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    }, [login, password]);

    const signInButton: ButtonParams = {
        text: 'Войти',
        type: 'signin',
        action: () => {
            dispatch(signIn(login, password));
        }
    }

    const forgotPasswordButton: ButtonParams = {
        text: 'Забыли пароль?',
        type: 'forgetpass',
        action: () => {}
    }

    const signUpButton: ButtonParams = {
        text: 'Зарегистрироваться',
        type: 'signup',
        action: () => {
            history.push('/register');
        }
    }

    return(
        <div className='signin-form'>
            <div className='signin-form__input-container'>
                <input type='text' className='signin-form__input' placeholder='Номер телефона' onChange={ event => {
                    setLogin(event.target.value)
                }}/>
                <input type="password" className='signin-form__input' placeholder='Пароль' onChange={ event => {
                    setPassword(event.target.value)
                }}/>
            </div>
            <div className="signin-form__button-container">
                <div className="signin-form__button-container__row">
                    <Button {...signInButton} />
                    <Button {...forgotPasswordButton} />
                </div>
                <div className="signin-form__button-container__row">
                    <Button {...signUpButton} />
                </div>
            </div>
        </div>
    )
}
