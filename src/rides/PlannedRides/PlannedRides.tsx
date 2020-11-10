import React from 'react';
import './PlannedRides.scss';
import route from '../../images/route.png';

export const PlannedRides = () => {
    return (
        <>
        <div className='planned-ride'>
            <div className="planned-ride__date">05.10.20, 18:30</div>
            <div className="planned-ride__address-container">
                <div className="planned-ride__decoration">
                    <img src={route} alt=""/>
                </div>
                <div className="planned-ride__addresses-wrapper">
                    <div className="planned-ride__address">
                        <div className="planned-ride__street">ул. Мира, 19</div>
                        <div className="planned-ride__distance">От вас: 350м</div>
                    </div>
                    <div className="planned-ride__address">
                        <div className="planned-ride__street">пл. Бахчиванджи, 20Б</div>
                        <div className="planned-ride__distance">До выбранного вами места: 400м</div>
                    </div>
                </div>
            </div>
        </div>
    <div className='planned-ride'>
        <div className="planned-ride__date">07.10.20, 09:00</div>
        <div className="planned-ride__address-container">
            <div className="planned-ride__decoration">
                <img src={route} alt=""/>
            </div>
            <div className="planned-ride__addresses-wrapper">
                <div className="planned-ride__address">
                    <div className="planned-ride__street">ул. Ленина, 10Б</div>
                    <div className="planned-ride__distance">От вас: 350м</div>
                </div>
                <div className="planned-ride__address">
                    <div className="planned-ride__street">пл. Свободы, 7</div>
                    <div className="planned-ride__distance">До выбранного вами места: 50м</div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
