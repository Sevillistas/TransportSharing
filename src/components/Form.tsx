import React from 'react';
import { Button, ButtonParams } from './Button';
import './styles/Form.scss';

export const Form = () => {

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
        action: () => {}
    }

    return(
        <div className='form'>
            <div className='form__input-container'>
                <input type='text' className='form__input'/>
                <input type="password" className='form__input'/>
            </div>
            <div className="form__button-container">
                <div className="button-container__row">
                    <Button {...signInButton} />
                    <Button {...forgotPasswordButton} />
                </div>
                <div className="button-container__row">
                    <Button {...signUpButton} />
                </div>
            </div>
        </div>
    )
}