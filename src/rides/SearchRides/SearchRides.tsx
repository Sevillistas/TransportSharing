import React, {useEffect, useState} from 'react';
import {Select, SelectOption} from "../../components/Select";
import {useHistory, useLocation} from "react-router";
import {Button} from "../../components/Button";
import './SearchRides.scss';

const selectOptions: Array<SelectOption> = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 }
];

export const SearchRides = () => {

    const location = useLocation<any>();
    const history = useHistory<any>();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [rideType, setRideType] = useState('');
    const [passengerCount, setPassengerCount] = useState(0);

    const onSelectPassengerCount = (value: number) => {
        setPassengerCount(value);
    }

    useEffect(() => {
        if (history.location.state.rideType) {
            let state = { ...history.location.state };
            delete state.rideType;
            history.replace({ ...history.location, state });
        }
    }, []);

    useEffect(() => {
        if (location.state.rideType) {
            setRideType(location.state.rideType);
        }
    }, [location]);

    const searchRides = async() => {
        try {
            const rideInfo = {
                startAddress: { x: 13.37, y: 2.28 },
                destinationAddress: { x: 14.88, y: 3.22 },
                peopleAmount: passengerCount,
                rideDate: new Date(date)
            };
            const response = await fetch('/find-rides', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(rideInfo)
            })
            const data = await response.json();
            console.log(data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='search-rides'>
            <div className="search-rides__label">Откуда Вы хотите поехать?</div>
            <input type="text" className="search-rides__input" placeholder='Введите адрес'
                onChange={event => setFrom(event.target.value)} />
            <div className="search-rides__label">Куда Вам необходимо добраться?</div>
            <input type="text" className="search-rides__input" placeholder='Введите адрес'
                onChange={event => setTo(event.target.value)} />
            <div className="search-rides__label">Укажите количество человек и дату поездки </div>
            <div className="search-rides__input-container">
                <div className="search-rides__select">
                    <Select defaultValue={1} options={selectOptions} onChange={onSelectPassengerCount} />
                </div>
                <input type="date" className="search-rides__input date"
                    onChange={event => setDate(event.target.value)} />
            </div>
            <Button text='Поиск подходящих поездок' type='default' action={() => {
                setTimeout(() => history.push('/main/search-results'), 1488)
            }} />
        </div>
    )
}
