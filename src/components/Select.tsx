import React, {useEffect, useState} from 'react';
import './styles/Select.scss';
import showOptions from '../images/chooseButton.svg';

export interface SelectOption {
    value: any;
    label: string;
}

export const Select = (props: any) => {

    const [value, setValue] = useState(props.defaultValue);
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [inputClass, setInputClass] = useState('');

    useEffect(() => {
        setInputClass(optionsVisible ? 'opened' : '')
    }, [optionsVisible]);

    return(
        <div className="select-container">
            <div className={`select__input-field ${inputClass}`} onClick={() => {
                setOptionsVisible(!optionsVisible)
            }}>
                <div className="select__value">{value}</div>
                <div className="select__arrow">
                    <img src={showOptions}/>
                </div>
            </div>
            { optionsVisible && <div className="select__option-container">
                { props.options.map((option: SelectOption) => {
                    return <div className='select__option' key={option.value} 
                    onClick={() => {
                        setValue(option.label);
                        setOptionsVisible(!optionsVisible)
                        props.onChange(option.label);
                    }}
                    >
                        {option.label}
                    </div>
                }
            )}
            </div>}
        </div>
    )
}
