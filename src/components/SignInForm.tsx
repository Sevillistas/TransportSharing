import React from 'react';
import {useHistory} from 'react-router';
import {Button, ButtonParams} from './Button';
import './styles/SignInForm.scss';

export const SignInForm = () => {

    const history = useHistory();

    const signInButton: ButtonParams = {
        text: 'Войти',
        type: 'signin',
        action: async() => {
            try {
                await signIn()
                history.push('/success');
            } catch (e) {
                console.log(e)
            }
        }
    }

    const signIn = async() => {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: 'thisIsLogin', password: 'thisIsPassword'})
        })
        const data = await response.json();
        console.log(data);
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
