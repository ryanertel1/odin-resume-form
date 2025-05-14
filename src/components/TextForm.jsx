import React from "react";
import '../styles/TextFormStyles.css';
import TextBox from './TextBox.jsx'
import { MdOutlinePersonOutline, MdEmail, MdLocalPhone, MdOutlineMap } from 'react-icons/md'

const TextForm = ({ title, handleData, data }) => {
    var formData = data ? data:
    {
        name: '',
        phone: '',
        email: '',
        address: '',
    }

    //console.log(newData);

    const handleNameChange = (e) => {
        let newData = {...formData};
        newData.name = e.target.value;
        handleData(newData);
    }
    const handlePhoneChange = (e) => {
        let newData = {...formData};
        newData.phone = e.target.value;
        handleData(newData);
    }
    const handleEmailChange = (e) => {
        let newData = {...formData};
        newData.email = e.target.value;
        handleData(newData);
    }
    const handleAddressChange = (e) => {
        let newData = {...formData};
        newData.address = e.target.value;
        handleData(newData);
    }
    return (
        <>
            <div className='text-form-container'>
                <h2>{ title ? title:'empty'}</h2>
                <TextBox icon={<MdOutlinePersonOutline />} type={'text'} placeholder={'Enter full name'} label={'Name'} value={formData.name} onChange={handleNameChange}/>
                <TextBox icon={<MdLocalPhone />} type={'text'} placeholder={'Enter phone number'} label={'Phone'} value={formData.phone} onChange={handlePhoneChange}/>
                <TextBox icon={<MdEmail />} type={'text'} placeholder={'Enter email'} label={'E-Mail'} value={formData.email} onChange={handleEmailChange}/>
                <TextBox icon={<MdOutlineMap />} type={'text'} placeholder={'Enter address (City, State)'} label={'Address'} value={formData.address} onChange={handleAddressChange}/>
            </div>
        </>
    )
}

export default TextForm;