import React from 'react'

function ErrorField(props) {
    const {input, placeholder, type, meta: {error, touched}} = props
    const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>
    return (
        <div>
            <input {...input} type={type} placeholder={placeholder}/>
            {errorText}
        </div>
    )
}

export default ErrorField