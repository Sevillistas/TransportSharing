import React, {useEffect, useState} from 'react';
import {Select, SelectOption} from "../../components/Select";
import {useHistory, useLocation} from "react-router";
import {Button} from "../../components/Button";
import './SearchRides.scss';
import {request} from "../../services/auth.service";
import {useDebounce} from "../../hooks/debounce.hook";
import {geocode} from "../../services/yandex.service";

const selectOptions: Array<SelectOption> = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 }
];

export const SearchRides = () => {

    const [resultsFrom, setResultsFrom] = useState();
    const [resultsTo, setResultsTo] = useState();

    const [isSearchingFrom, setIsSearchingFrom] = useState(false);
    const [isSearchingTo, setIsSearchingTo] = useState(false);

    const location = useLocation<any>();
    const history = useHistory<any>();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [rideType, setRideType] = useState('');
    const [passengerCount, setPassengerCount] = useState(0);

    const debouncedFrom = useDebounce(from, 500);
    const debouncedTo = useDebounce(to, 500);

    const onSelectPassengerCount = (value: number) => {
        setPassengerCount(value);
    }

    useEffect(() => {
        if (debouncedFrom) {
            setIsSearchingFrom(true);
            geocode(debouncedFrom).then(results => {
                setIsSearchingFrom(false);
                setResultsFrom(results);
            });
        } else {
            setResultsFrom(null);
        }
    }, [debouncedFrom]);

    useEffect(() => {
        if (debouncedTo) {
            setIsSearchingTo(true);
            geocode(debouncedTo).then(results => {
                setIsSearchingTo(false);
                setResultsTo(results);
            });
        } else {
            setResultsTo(null);
        }
    }, [debouncedTo]);

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
        const rideInfo = {
            startAddress: resultsFrom,
            destinationAddress: resultsTo,
            peopleAmount: passengerCount,
            rideDate: new Date(date)
        }
        const data = await request('/find-rides', 'POST', rideInfo);
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
                    <Select initialState={{label: '1', value: 1}} options={selectOptions} onChange={onSelectPassengerCount} />
                </div>
                <input type="date" className="search-rides__input date"
                    onChange={event => setDate(event.target.value)} />
            </div>
            <Button text='Поиск подходящих поездок' type='default' action={() => searchRides()}/>
        </div>
    )
}
