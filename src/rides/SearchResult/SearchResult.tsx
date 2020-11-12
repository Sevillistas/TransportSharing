import React, {useState} from 'react';
import {RideCard} from "../../components/RideCard";
import './SearchResult.scss';

const plannedRides = [
    {
        date: '19.11.20, 19:00',
        addressFrom: 'ул. Мира, 4',
        distanceFrom: 200,
        addressTo: 'ул. Рассветная, 8/2',
        distanceTo: 350,
        freePlaces: 1,
        allPlaces: 3
    }
]

export const SearchResult = () => {

    const [rides, setRides] = useState([]);

    return(
        <div className='search-result'>
            <div className="search-result__title">По вашему запросу найдено {plannedRides.length || '0'} поездки</div>
            <div className="search-result__container">
                { plannedRides && plannedRides.map(ride => (<RideCard ride={ride} key={ride.date} searchResult={true} />)) }
            </div>
        </div>
    )
}
