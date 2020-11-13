import React from 'react';
import './PlannedRides.scss';
import {RideCard} from "../../components/RideCard";

const plannedRides = [
    {
        date: '19.11.20, 19:00',
        addressFrom: 'ул. Мира, 4',
        distanceFrom: 200,
        addressTo: 'ул. Рассветная, 8/2',
        distanceTo: 350,
    }
]

export const PlannedRides = () => {
    return(
        <div className='planned-rides'>
            { plannedRides.map(ride => (<RideCard ride={ride} key={ride.date} />)) }
        </div>
    )
}
