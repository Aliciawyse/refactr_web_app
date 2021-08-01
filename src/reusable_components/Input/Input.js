import PropTypes from 'prop-types'
import React from 'react'
import { InputLabel, TextInput, InputContainer } from './style'

export function Input ({
    placeholder = '',
    initialValue = '',
    defaultValue = null,
    label = null,
    type = 'text',
    domID = null,
    disabled = false,
    name = null,
    onChange = () => false
}) {
    if (label && !domID) {
        console.warn('Please enter a valid "domID" prop into Input component')
    }

    return (
        <InputContainer>
            {label ? <InputLabel htmlFor={domID}>{label}</InputLabel> : null}

            <TextInput
                id={domID}
                defaultValue={defaultValue}
                initialValue={initialValue}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
        </InputContainer>
    )
}

Input.propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    domID: PropTypes.string.isRequired,
    initialValue: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
}