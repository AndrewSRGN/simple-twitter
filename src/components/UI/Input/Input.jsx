import React from 'react';
import './Input.css';

const Input = ({ value, onChange, name,...props }) => {
    return (
        <div className="input-container">
            <input {...props} className="input-field"
                   id={name}
                   value={value} onChange={onChange}/>

            <label htmlFor={name} className="input-label">
                {props.placeholder}
            </label>

            <span className="input-highlight"></span>
        </div>
    );
};

export default Input;