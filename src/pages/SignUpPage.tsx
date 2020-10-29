import React, { useState } from 'react';
import { useWindowDimensions } from '../hooks/windowresize.hook';
import './styles/SignUpPage.scss';
import { Select } from '../components/Select';

export interface SelectOption {
    value: string;
    label: string;
}

export const SignUpPage = () => {

    const { width } = useWindowDimensions();

    const selectOptions: Array<SelectOption> = [
        { value: 'man', label: 'М' },
        { value: 'woman', label: 'Ж' },
    ]

    const [sex, setSex] = useState('');

    const onSelectSex = (value: string) => {
        setSex(value);
        console.log(value);
    }

    // const select = <Select options={selectOptions} 
    // className='signup-form__select-container'
    // classNamePrefix="signup-form__select"
    // placeholder='Пол' />

    if (width > 720) {
        return (
            <div className='signup-page'>
                <div className="signup-form">
                    <h1 className="signup-form__header">Регистрация</h1>
                    <div className="signup-form__content">
                        <div className="signup-form__left-col">
                            <input type="text" className="signup-form__input"
                            placeholder='Электронная почта' />
                            <input type="text" className="signup-form__input"
                            placeholder='Номер телефона'/>
                            <input type="password" className="signup-form__input shrink"
                            placeholder='Пароль'/>
                            <input type="password" className="signup-form__input shrink"
                            placeholder='Повторите пароль'/>
                        </div>
                        <div className="signup-form__right-col">
                            <input type="text" className="signup-form__input"
                            placeholder='Имя'/>
                            <input type="text" className="signup-form__input"
                            placeholder='Отчество'/>
                            <div className="signup-form__row">
                                <input type="text" className="signup-form__input"
                                placeholder='Возраст'/>
                                <Select options={selectOptions} onChange={onSelectSex} />
                            </div>
                            <div className="signup-form__row"></div>
                        </div>
                    </div>
                    <div className="signup-form__footer">
                        
                    </div>    
                </div>
            </div>
        )
    } else {
        return(
            <h1>mobile</h1>
        )
    }
}