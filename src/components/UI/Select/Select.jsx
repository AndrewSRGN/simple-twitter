import React from 'react';
import './Select.css';

const Select = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className="select"
            value={value}
            onChange={onChange}
        >
            <option
                className="select__option"
                value="" disabled>
                {defaultValue}
            </option>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className="select__option"
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Select;