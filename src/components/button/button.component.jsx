import React, { Component } from 'react';

import './button.styles.scss';

const Button = props => {
    return <button className={props.color + "-button btn " + props.size}><a href={props.link} target="_blank">{props.children}</a></button>
};


export default Button;
