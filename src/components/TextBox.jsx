import React, { useState } from "react";
import '../styles/TextBoxStyles.css';

const TextBox = ({ ...props }) => {
    return (
        <>
            <div className='inputWrapper'>
                <div className='inputContainer'>
                    {props.icon &&
                        <div>
                            {props.icon}
                        </div> 
                    }

                    <input
                        type = {props.type}
                        placeholder = {props.placeholder}
                        value = {props.value}
                        onChange = {props.onChange}
                        name = {props.name}
                    />
                </div>
            </div>
        </>
    )
}

export default TextBox;