import React, {useCallback, useState} from 'react';
import {SignInForm} from '../components/SignInForm';
import './styles/SignInPage.scss';
import bannerImage from '../images/banner.png';
import {useWindowDimensions} from '../hooks/windowresize.hook';
import {Button, ButtonParams} from '../components/Button';
import {useHistory} from 'react-router';

export const SignInPage = () => {

    const { width } = useWindowDimensions();

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

    const signUpButton: ButtonParams = {
        text: 'Зарегистрироваться',
        type: 'signup-mobile',
        action: () => {
            history.push('/register');
        }
    }

    const signInButton: ButtonParams = {
        text: 'Вход',
        type: 'signin-mobile',
        // action: async() => {
        //     await signIn(login, password).then(
        //         () => {
        //             history.push('/main/search');
        //         }, error => {
        //             console.log(error);
        //         }
        //     );
        // }
        action: () => {
            setTimeout(() =>  history.push('/main/search-results', {auth: true}), 800);
        }
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
                <SignInForm />
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
                            <input type="text" placeholder='Номер телефона' onChange={ event => {
                                setLogin(event.target.value)
                            }}/>
                            <input type="password" placeholder='Пароль' onChange={ event => {
                                setPassword(event.target.value)
                            }}/>
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
