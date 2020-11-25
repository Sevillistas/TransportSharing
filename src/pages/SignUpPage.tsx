import React, {useState} from 'react';
import {useWindowDimensions} from '../hooks/windowresize.hook';
import './styles/SignUpPage.scss';
import {Select, SelectOption} from '../components/Select';
import plus from '../images/plus.svg'
import {Button} from "../components/Button";
import {useHistory} from "react-router";

export const SignUpPage = () => {

    const history = useHistory();

    const { width } = useWindowDimensions();

    const selectOptions: Array<SelectOption> = [
        { value: 'М', label: 'М' },
        { value: 'Ж', label: 'Ж' },
    ]

    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [name, setName] = useState('');
    const [patrName, setPatrName] = useState('');
    const [age, setAge] = useState(0);
    const [logoUrl, setLogoUrl] = useState('');

    const onSelectGender = (value: string) => {
        setGender(value);
        console.log(value);
    }

    if (width > 720) {
        return (
            <div className='signup-page'>
                <div className="signup-form">
                    <h1 className="signup-form__header">Регистрация</h1>
                    <div className="signup-form__content">
                        <div className="signup-form__left-col">
                            <input type="text" className="signup-form__input"
                            placeholder='Электронная почта'
                            onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" className="signup-form__input"
                            placeholder='Номер телефона'
                            onChange={(e) => setPhoneNumber(e.target.value)}/>
                            <input type="password" className="signup-form__input shrink"
                            placeholder='Пароль'
                            onChange={(e) => setPassword(e.target.value)}/>
                            <input type="password" className="signup-form__input shrink"
                            placeholder='Повторите пароль'
                            onChange={(e) => setRepeat(e.target.value)}/>
                        </div>
                        <div className="signup-form__right-col">
                            <input type="text" className="signup-form__input"
                            placeholder='Имя'
                            />
                            <input type="text" className="signup-form__input"
                            placeholder='Отчество'/>
                            <div className="signup-form__row">
                                <input type="text" className="signup-form__input"
                                placeholder='Возраст'/>
                                <Select defaultValue='Пол' options={selectOptions} onChange={onSelectGender} />
                            </div>
                            <div className="signup-form__row">
                                <div className="signup-form__advice">
                                    <h2>Загрузите фото</h2>
                                    <h3>Это повысит доверие среди
                                        <br/>других пользователей</h3>
                                </div>
                                <div className="signup-form__photo">
                                    <img src={plus} alt=""/>
                                    <span>фото</span>
                                    {/*TODO*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup-form__footer">
                        <Button text={'Зарегистрироваться'} type={'signup'} action={() => history.push('/')}/>
                        <div className="signup-form__info">
                            Нажимая “Зарегистрироваться”, Вы подтверждаете свое согласие<br/>
                            на обработку ваших <u>персональных данных</u>
                        </div>
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
