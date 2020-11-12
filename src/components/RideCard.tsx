import React from 'react';
import route from "../images/route.png";
import './styles/RideCard.scss';

export const RideCard = ({ride, searchResult}: any) => {

    const fromSearch = searchResult && 'from-search';

    return (
        <div className={`ride-card ${fromSearch}`}  key={ride.date}>
            <div className="ride-card__date">{ride.date}</div>
            <div className="ride-card__address-container">
                <div className="ride-card__decoration">
                    <img src={route} alt=""/>
                </div>
                <div className="ride-card__addresses-wrapper">
                    <div className="ride-card__address">
                        <div className="ride-card__street">{ride.addressFrom}</div>
                        <div className="ride-card__distance">От вас: {ride.distanceFrom}м</div>
                    </div>
                    <div className="ride-card__address">
                        <div className="ride-card__street">{ride.addressTo}</div>
                        <div className="ride-card__distance">До выбранного вами места: {ride.distanceTo}м</div>
                    </div>
                </div>
            </div>
            { searchResult && <div className="ride-card__places">Места: <span>{ride.freePlaces}/{ride.allPlaces}</span></div> }
        </div>
    )
}
