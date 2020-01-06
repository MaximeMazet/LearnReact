import React from 'react';
import './Button.css';

const Button = ({veillir, agePlus}) => {
    return(
        <button onClick={veillir}>
            Veillir de {agePlus} ans
        </button>
    );
}

export default Button;