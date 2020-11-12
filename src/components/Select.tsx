import React, {useEffect, useState} from 'react';
import './styles/Select.scss';
import showOptions from '../images/chooseButton.svg';

export interface SelectOption {
    value: any;
    label: any;
}

interface SelectProps {
    defaultValue: string | number;
    options?: SelectOption[];
    onChange?: any;
}

export const Select = ({defaultValue, options, onChange} : SelectProps) => {

    const [value, setValue] = useState(defaultValue);
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
                { options && options.map((option: SelectOption) => {
                    return <div className='select__option' key={option.value} 
                    onClick={() => {
                        setValue(option.label);
                        setOptionsVisible(!optionsVisible)
                        onChange(option.value);
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
