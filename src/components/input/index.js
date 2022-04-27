import React from 'react'
import './input.styles.css'

const Input = ({ type, value, onChange, label, name }) => {
	return (
        <div className='FormField'>
            <label for={name}>{label}</label>
            <input
                type={type}
                name={name}
                className='FormInput'
                value={value}
                onChange={onChange}
            />
        </div>
	);
};

export default Input;
