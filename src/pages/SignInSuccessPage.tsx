import React from 'react';
import './styles/SignInSuccessPage.scss'
import adv from '../images/predlozhenie.jpg'

export const SignInSuccessPage = () => {
    return (
        <>
            <h1 className='success__h1'>Вы вошли в систему! Теперь можете уходить...
                <img className='success__img' src={adv}/>
            </h1>
        </>
    )
}
