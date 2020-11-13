import React from 'react';
import './DetailRideCard.scss';
import {Button} from "../../components/Button";
import {useHistory} from "react-router";

export const DetailRideCard = () => {

    const history = useHistory();

    return(
        <div className='detail-ride-card'>
            <div className="detail-ride-card__title">Детали поездки</div>
            <div className="first-wrapper">
                <div className="first-wrapper__left">
                    <div className="first-wrapper__date">19 ноября, 19:00</div>
                    <div className="first-wrapper__address">
                        <div className="Street">ул. Мира, 4</div>
                        <div className="Distance">От вас: 200м</div>
                    </div>
                    <div className="first-wrapper__address">
                        <div className="Street">ул. Рассветная, 8/2</div>
                        <div className="Distance">До выбранного вами места: 350м</div>
                    </div>
                </div>
                <div className="first-wrapper__right">
                    <div className="first-wrapper__right__header">Пассажиры</div>
                    <div>134568132</div>
                    <div>275871663</div>
                </div>
            </div>
            <div className="detail-ride-card__row">Свободных мест: <span>1</span></div>
            <div className="detail-ride-card__row">Всего пассажиров: 3</div>
            <div className="detail-ride-card__row">Предпочитаемый бренд: любой</div>
            <div className="detail-ride-card__row">Класс транспорта: эконом</div>
            <div className="detail-ride-card__row">Комментарий: Возьмите пожалуйста маски</div>
            <Button text='Присоединиться к поездке' type='default' action={() => setTimeout(() => history.push('/main/search'), 250)} />
        </div>
    )
}
