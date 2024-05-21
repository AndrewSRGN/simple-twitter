import React from 'react';
import './Input.css';

const Input = ({ value, onChange, ...props }) => {
    return (
        <div className="input-container">
            <input {...props} className="input-field"
                   value={value} onChange={onChange}/>

            <label htmlFor="input-field" className="input-label">
                {props.placeholder}
            </label>

            <span className="input-highlight"></span>
        </div>
    );
};

export default Input;