import React, { useId } from "react";
import '../styles/TextBoxStyles.css';

const TextAreaBox = ({ ...props }) => {
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

                    <textarea
                        id = {id}
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

export default TextAreaBox;