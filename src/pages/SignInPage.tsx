import React from 'react';
import { Form } from '../components/Form';
import './styles/SignInPage.scss';
import bannerImage from '../images/banner.png';
import { useWindowDimensions } from '../hooks/windowresize.hook';
import { Button, ButtonParams } from '../components/Button';

export const SignInPage = () => {

    const { width } = useWindowDimensions();

    const signUpButton: ButtonParams = {
        text: 'Зарегистрироваться',
        type: 'signup-mobile',
        action: () => {}
    }

    const signInButton: ButtonParams = {
        text: 'Вход',
        type: 'signin-mobile',
        action: () => {}
    }

    const forgetPasswordButton: ButtonParams = {
        text: 'Забыли пароль?',
        type: 'forgetpass-mobile',
        action: () => {}
    }
    
    if(width > 720){
        return (
            <div className='signin-page'>
                <div className="signin-page__banner">
                    <img src={bannerImage} alt="banner"/>
                </div>
                <Form />
            </div>
        )
    } else {
        return (
            <div className='signin-page-m'>
                <div className='signin-page-m__header'>
                    <h1>Войдите или<br/>
                    зарегистрируйтесь
                    </h1>
                </div>
                <div className="signin-page-m__form">
                    <div className="signin-page-m__form__content">
                        <div className="signin-page-m__input-container">
                            <input type="text"/>
                            <input type="password" />
                        </div>
                        <div className="signin-page-m__button-container">
                            <Button {...signInButton}/>
                            <Button {...forgetPasswordButton}/>
                        </div>
                    </div>
                </div>
                <div className="signin-page-m__footer">
                    <h2>Ещё не пользовались?</h2>
                    <Button {...signUpButton}/>
                </div>
            </div>
        )
    }

}