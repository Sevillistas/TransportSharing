import React from 'react';
import {Button} from "../../components/Button";
import {useHistory} from "react-router";
import './CreateRideSuccess.scss'
import successImg from '../../images/success_logo_large.png';

export const CreateRideSuccess = () => {

    const history = useHistory();
    return(
        <div className='create-ride-success'>
            <h1>Поездка успешно опубликована!<br/>Ожидайте попутчиков</h1>
            <div className="create-ride-success__image-container">
                <img src={successImg} alt=""/>
            </div>
            <Button text='Вернуться на главную' type='default2' action={() => history.push('/main/search')} />
        </div>
    )
}
