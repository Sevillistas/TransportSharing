import React from 'react';
import './PlannedRides.scss';
import route from '../../images/route.png';

const plannedRides = [
    {
        date: '05.10.20, 18:30',
        addressFrom: 'ул. Мира, 19',
        distanceFrom: 350,
        addressTo: 'пл. Бахчиванджи, 20Б',
        distanceTo: 400,
    },
    {
        date: '07.10.20, 09:00',
        addressFrom: 'ул. Ленина, 10Б',
        distanceFrom: 350,
        addressTo: 'пл. Свободы, 7',
        distanceTo: 50,
    }
]

export const PlannedRides = () => {
    return(
        <div className='planned-rides'>
            { plannedRides.map(ride => (
            <div className='planned-ride' key={ride.date}>
                <div className="planned-ride__date">{ride.date}</div>
                <div className="planned-ride__address-container">
                    <div className="planned-ride__decoration">
                        <img src={route} alt=""/>
                    </div>
                    <div className="planned-ride__addresses-wrapper">
                        <div className="planned-ride__address">
                            <div className="planned-ride__street">{ride.addressFrom}</div>
                            <div className="planned-ride__distance">От вас: {ride.distanceFrom}м</div>
                        </div>
                        <div className="planned-ride__address">
                            <div className="planned-ride__street">{ride.addressTo}</div>
                            <div className="planned-ride__distance">До выбранного вами места: {ride.distanceTo}м</div>
                        </div>
                    </div>
                </div>
            </div>
            )) }
        </div>
    )
}
