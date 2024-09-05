import React from 'react'
import '../styles/clear.css'

const ButtonClear = (props) => (

    <div className='clear-button'
        onClick={props.manageClear}>
        {props.children}

    </div>
);

export default ButtonClear;