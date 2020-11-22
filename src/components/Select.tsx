import React, {useEffect, useState} from 'react';
import './styles/Select.scss';
import showOptions from '../images/chooseButton.svg';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

export interface SelectOption {
    value: any;
    label: any;
}

interface SelectProps {
    initialState: SelectOption;
    options?: SelectOption[];
    onChange?: any;
}

export const Select = ({initialState, options, onChange} : SelectProps) => {

    const [state, setState] = useState<SelectOption>(initialState);
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
                <div className="select__value">{state.label}</div>
                <div className="select__arrow">
                    <img src={showOptions}/>
                </div>
            </div>
            { optionsVisible && <div className="select__wrapper">
                <PerfectScrollbar className='select__option-container' onScroll={(e) => e.stopPropagation()}>
                { options && options.map((option: SelectOption) => {
                        return <div className='select__option' key={option.value} title={option.label}
                            onClick={() => {
                                setState(option);
                                setOptionsVisible(!optionsVisible)
                                onChange(option.value);
                            }}
                        >
                            {option.label}
                        </div>
                    }
                )}
                </PerfectScrollbar>
            </div>}
        </div>
    )
}
