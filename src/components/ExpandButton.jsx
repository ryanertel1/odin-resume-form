import React, { useState } from 'react';
import '../styles/ExpandButtonStyles.css';
import { MdExpandCircleDown } from 'react-icons/md';

const ExpandButton = ({ ...props }) => {
    return(
        <button onClick={props.onClick}>
            <MdExpandCircleDown className = 'expand-button-icon' style={props.style}/>
        </button>
    )
}

export default ExpandButton;