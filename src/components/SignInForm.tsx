import React, {useCallback, useState} from 'react';
import {Button, ButtonParams} from './Button';
import './styles/SignInForm.scss';
import {signIn} from "../services/auth.service";
import {useHistory} from "react-router";

export const SignInForm = () => {

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
        action: async() => {
            if (validateForm()) {
                await signIn(login, password).then(
                    () => {
                        history.push('/success');
                    }, error => {
                        console.log(error);
                    }
                );
            } else {
                console.log('Validation error');
            }
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
