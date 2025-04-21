import React, { useState, useId } from "react";
import '../styles/TextBoxStyles.css';

const TextBox = ({ ...props }) => {
    const id = useId();
    return (
        <>
            <div className='inputWrapper'>
                <label
                    htmlFor={id}
                >
                    {props.label}
                </label>
                <div className='inputContainer'>
                    {props.icon &&
                        <div>
                            {props.icon}
                        </div> 
                    }

                    <input
                        id = {id}
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