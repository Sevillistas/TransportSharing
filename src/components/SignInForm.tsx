import React from 'react';
import { useHistory } from 'react-router';
import { Button, ButtonParams } from './Button';
import './styles/SignInForm.scss';

export const SignInForm = () => {

    const history = useHistory();

    const signInButton: ButtonParams = {
        text: 'Войти',
        type: 'signin',
        action: () => {}
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
                <input type='text' className='signin-form__input' placeholder='Номер телефона'/>
                <input type="password" className='signin-form__input' placeholder='Пароль'/>
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