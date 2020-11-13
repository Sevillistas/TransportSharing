import React from 'react';
import route from "../images/route.png";
import './styles/RideCard.scss';
import {useHistory} from "react-router";

export const RideCard = ({ride, searchResult}: any) => {

    const fromSearch = searchResult && 'from-search';

    const history = useHistory();

    return (
        <div className={`ride-card ${fromSearch}`}  key={ride.date} onClick={() => setTimeout(() => {
            history.push('/main/ride/0290065f-3e8e-47f7-9511-f5a9a96b1a41');
        },400)}>
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
