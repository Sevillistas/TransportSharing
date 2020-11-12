import React from 'react';
import './PlannedRides.scss';
import {RideCard} from "../../components/RideCard";

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
            { plannedRides.map(ride => (<RideCard ride={ride} key={ride.date} />)) }
        </div>
    )
}
