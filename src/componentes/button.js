import React from 'react'
import '../styles/button.css'


function Button(props) {

    const isOperator = value => {

        return isNaN(value) && (value != '.') && (value != '=')
    };

    return (

        <button className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            OnClick={() => props.manageClic(props.children)}>
            {props.children}
        </button>

    );

}

export default Button;
