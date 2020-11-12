import React, {useState} from 'react';
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

export const SearchResult = () => {

    const [rides, setRides] = useState([]);

    return(
        <div className='search-result'>
            <div className="search-result__title">По вашему запросу найдено {rides.length || '0'} поездки</div>
            <div className="search-result__container">
                { plannedRides && plannedRides.map(ride => (<RideCard ride={ride} key={ride.date} />)) }
            </div>
        </div>
    )
}
