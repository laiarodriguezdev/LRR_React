import React from 'react';
import './ButtonP02.css';

function ButtonP02(props) {
    const btnClassName = props.esClick ? 'btnClick' : 'btnReiniciar';  

    return (
      <button className={btnClassName} onClick={props.onClick}>
          {props.text}
      </button>
    )
}

export default ButtonP02;