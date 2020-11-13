import React, {useEffect, useState} from 'react';
import './RideTypes.scss';
import taxi from '../../images/taxi_logo.png';
import carsharing from '../../images/carsharing_logo.png';
import anyRide from '../../images/any_ride_logo.png';
import {useHistory} from "react-router";

export const RideTypes = () => {

    const [rideType, setRideType] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (rideType) {
            setTimeout(() => history.push('/main/search-form', {rideType}), 120);
        }
    }, [rideType])

    return(
        <div className='ride-types-container'>
            <div className="ride-type" onClick={() => setRideType('taxi')}>
                <div className="ride-type__image-container">
                    <img className="ride-type__image" src={taxi} alt="car_type"/>
                </div>
                <div className="ride-type__info">
                    <div className="ride-type__title">
                        Такси
                    </div>
                    <div className="ride-type__description">
                        Удобно и комфортно.<br/>Из одной точки в другую без лишних забот
                    </div>
                </div>
            </div>
            <div className="ride-type" onClick={() => setRideType('carsharing')}>
                <div className="ride-type__image-container">
                    <img className="ride-type__image" src={carsharing} alt="car_type"/>
                </div>
                <div className="ride-type__info">
                    <div className="ride-type__title">
                        Каршеринг
                    </div>
                    <div className="ride-type__description">
                        Максимальная свобода<br/> при выборе автомобиля
                    </div>
                    <div className="ride-type__optional">
                        *Среди пассажиров должен быть водитель
                    </div>
                </div>
            </div>
            <div className="ride-type" onClick={() => setRideType('any')}>
                <div className="ride-type__image-container">
                    <img className="ride-type__image" src={anyRide} alt="car_type"/>
                </div>
                <div className="ride-type__info">
                    <div className="ride-type__title">
                        Всё и сразу
                    </div>
                    <div className="ride-type__description">
                        Выбирайте, что больше<br/> подходит, по ситуации
                    </div>
                </div>
            </div>
        </div>
    )
}
