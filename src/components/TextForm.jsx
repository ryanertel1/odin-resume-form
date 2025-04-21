import React, { useState, useId } from "react";
import '../styles/TextFormStyles.css';
import TextBox from './TextBox.jsx'
import { MdOutlinePersonOutline, MdEmail, MdLocalPhone, MdOutlineMap } from 'react-icons/md'

const TextForm = ({ title, ...props }) => {
    return (
        <>
            <div className='text-form-container'>
                <h2>{ title ? title:'empty'}</h2>
                <TextBox icon={<MdOutlinePersonOutline />} type={'text'} placeholder={'Enter full name'} label={'Name'}/>
                <TextBox icon={<MdEmail />} type={'text'} placeholder={'Enter email'} label={'E-Mail'}/>
                <TextBox icon={<MdLocalPhone />} type={'text'} placeholder={'Enter phone number'} label={'Phone'}/>
                <TextBox icon={<MdOutlineMap />} type={'text'} placeholder={'Enter address (City, State)'} label={'Address'}/>
            </div>
        </>
    )
}

export default TextForm;