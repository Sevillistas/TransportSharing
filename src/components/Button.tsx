import React from 'react';
import './styles/Button.scss';

export interface ButtonParams {
    text: string;
    type: string;
    action?: any;
}

export const Button = (buttonParams: ButtonParams) => {
    return (
        <button className={`button ${buttonParams.type}`} 
        onClick={buttonParams.action}>
            {buttonParams.text}
        </button>
    )
}