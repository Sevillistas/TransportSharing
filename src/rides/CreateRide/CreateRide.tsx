import React, {useState} from 'react';
import './CreateRide.scss';
import {Select, SelectOption} from "../../components/Select";
import {Button} from "../../components/Button";
import {useHistory} from "react-router";

const countPassengerOptions: Array<SelectOption> = Array.from({length: 8},
    (el, i) => ({value: ++i, label: i}));

const hourOptions: Array<SelectOption> = Array.from({length: 24},
    (el, i) => ({value: i, label: i++}));

const minuteOptions: Array<SelectOption> = Array.from({length: 60},
    (el, i) => ({value: i, label: i <= 9 ? `0${i++}` : i++}));

const brandTaxiOptions: Array<SelectOption> = [
    {value: 'Ситимобил', label: 'Ситимобил'},
    {value: 'Яндекс', label: 'Яндекс'},
    {value: 'Uber', label: 'Uber'},
]

const brandCarsharingOptions: Array<SelectOption> = [
    {value: 'Делимобиль', label: 'Делимобиль'},
    {value: 'Яндекс.Драйв', label: 'Яндекс.Драйв'},
    {value: 'U-Drive', label: 'U-Drive'},
    {value: 'Белка', label: 'Белка'},
    {value: 'URA.MOBIL', label: 'URA.MOBIL'},
]

const classOptions: Array<SelectOption> = [
    {value: 'Эконом', label: 'Эконом'},
    {value: 'Комфорт', label: 'Комфорт'},
    {value: 'Бизнес', label: 'Бизнес'},
    {value: 'Детский', label: 'Детский'},
]

export const CreateRide = () => {

    const history = useHistory();

    const [addressFrom, setAddressFrom] = useState('');
    const [addressTo, setAddressTo] = useState('');
    const [countPassenger, setCountPassenger] = useState(0);
    const [countAdditionalPassenger, setCountAdditionalPassenger] = useState(0);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [rideType, setRideType] = useState('');
    const [brand, setBrand] = useState('');
    const [classRide, setClassRide] = useState('');
    const [comment, setComment] = useState('');

    const onSelectCountPassenger = (value: number) => {
        setCountPassenger(value);
        console.log(value);
    }

    const onSelectCountAdditionalPassenger = (value: number) => {
        setCountAdditionalPassenger(value);
        console.log(value);
    }

    const onSelectHour = (value: number) => {
        setHour(value);
        console.log(value);
    }

    const onSelectMinute = (value: number) => {
        setMinute(value);
        console.log(value);
    }

    const onSelectBrand = (value: string) => {
        setBrand(value);
        console.log(value);
    }

    const onSelectClass = (value: string) => {
        setClassRide(value);
        console.log(value);
    }

    const createRide = async() => {
        // const ride = {
        //     addressFrom,
        //     addressTo,
        //     countPassenger,
        //     date,
        //     hour,
        //     minute,
        //     countAdditionalPassenger,
        //     rideType,
        //     brand,
        //     classRide,
        //     comment
        // }
        try {
            const qstlRide = {
                startAddress: {
                    x: 13.37,
                    y: 2.82
                },
                destinationAddress: {
                    x: 14.88,
                    y: 6.7
                },
                generalPassengersAmount: countPassenger,
                peopleWithCreator: countAdditionalPassenger,
                transportType: rideType,
                brand,
                transportClass: classRide,
                commentary: comment
            }
            const response = await fetch('/create-ride', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(qstlRide)
            })
            const data = await response.json();
            console.log(data)
        } catch (e) {
            console.log(e);
        } finally {
            history.push('/main/create-success');
        }
    }

    return(
        <div className='create-ride'>
            <h1 className="create-ride__title">Создайте поездку</h1>
            <div className="create-ride__label">Откуда Вам удобно поехать?</div>
            <input type="text" className="create-ride__input" placeholder='Введите адрес'
                onChange={e => setAddressFrom(e.target.value)} />
            <div className="create-ride__label">Куда Вам необходимо добраться?</div>
            <input type="text" className="create-ride__input" placeholder='Введите адрес'
               onChange={e => setAddressTo(e.target.value)} />
            <div className="create-ride__label">Укажите общее количество человек, дату<br/>и время поездки </div>
            <div className="create-ride__input-container">
                <div className="create-ride__select">
                    <Select defaultValue={1} options={countPassengerOptions} onChange={onSelectCountPassenger} />
                </div>
                <input type="date" className="create-ride__input date"
                   onChange={e => setDate(e.target.value)} />
                <div className="create-ride__select">
                    <Select defaultValue={12} options={hourOptions} onChange={onSelectHour} />
                </div>
                <div className="create-ride__select">
                    <Select defaultValue={'00'} options={minuteOptions} onChange={onSelectMinute} />
                </div>
            </div>
            <div className="create-ride__label">Сколько с Вами будет человек? <br/>(0 - если Вы один)</div>
            <div className="create-ride__select small">
                <Select defaultValue={0} options={countPassengerOptions} onChange={onSelectCountAdditionalPassenger} />
            </div>
            <div className="create-ride__label">При необходимости укажите параметры<br/>поездки</div>
            <div className="create-ride__radio-row">
                <input type="radio" name='rideType' id='any' onChange={() => setRideType('any')} />
                <label htmlFor="any">Любой транспорт</label>
            </div>
            <div className="create-ride__radio-row">
                <input type="radio" name='rideType' id='taxi' onChange={() => setRideType('taxi')} />
                <label htmlFor="taxi">Такси</label>
            </div>
            <div className="create-ride__radio-row">
                <input type="radio" name='rideType' id='carsharing' onChange={() => setRideType('carsharing')}/>
                <label htmlFor="carsharing">Каршеринг</label>
            </div>
            <div className="create-ride__input-container">
                <div className="create-ride__select">
                    <Select defaultValue={'Бренд'} options={ rideType === 'taxi' ? brandTaxiOptions : brandCarsharingOptions} onChange={onSelectBrand} />
                </div>
                <div className="create-ride__select">
                    <Select defaultValue={'Класс'} options={classOptions} onChange={onSelectClass} />
                </div>
            </div>
            <textarea className="create-ride__textarea" placeholder='Комментарий'
            onChange={ e => setComment(e.target.value) } ></textarea>
            <Button text='Опубликовать поездку' type='default' action={() => createRide()} />
        </div>
    )
}
