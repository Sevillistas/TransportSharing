import React, { useState } from 'react';
import { SelectOption } from '../pages/SignUpPage';

export const Select = (props: any) => {

    const [value, setValue] = useState('Пол');

    return(
        <div className="select-container">
            <div className="select__input-field">
                <div className="select__value">{value}</div>
                <div className="select__arrow"></div>
            </div>
            <div className="select__options-container">
                { props.options.map((option: SelectOption) => {
                    return <div className='select__option' key={option.value} 
                    onClick={() => {
                        setValue(option.label);
                        props.onChange(option.label);
                    }}
                    >
                        {option.label}
                    </div>
                }
            )}
            </div>
        </div>
    )
}