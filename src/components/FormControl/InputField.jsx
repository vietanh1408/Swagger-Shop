import React from 'react';
import PropTypes from 'prop-types';


const InputField = (props) => {

    const { inputRef, type, name, label, value, errors } = props

    const hasError = errors[name]

    return (
        <div className="form-group">
            <label>{label}</label>
            <input ref={inputRef} type={type} name={name} value={value} className={hasError && "input--error"}></input>
            <span className={hasError && "error-message"}>{hasError && `${hasError.message}`}</span>
        </div>
    );
};


InputField.propTypes = {
};


export default InputField;
