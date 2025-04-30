import TextBox from './TextBox.jsx';
import React, { useState } from "react";

const ExperienceEditForm = ({ handleSave, object, ...props }) => {
    const [companyValue, setCompanyValue] = useState(object.company);
    const [titleValue, setTitleValue] = useState(object.title);
    const [startValue, setStartValue] = useState(object.start);
    const [endValue, setEndValue] = useState(object.end);
    const [addressValue, setAddressValue] = useState(object.location);

    function handleCompanyChange(event) {
        setCompanyValue(event.target.value);
    }
    function handleTitleChange(event) {
        setTitleValue(event.target.value);
    }
    function handleStartChange(event) {
        setStartValue(event.target.value);
    }
    function handleEndChange(event) {
        setEndValue(event.target.value);
    }
    function handleAddressChange(event) {
        setAddressValue(event.target.value);
    }

    return(
        <form onSubmit={handleSave}>
            <TextBox type={'text'} placeholder={'Enter employer name'} label={'Employer'} title={'Employer'} value={companyValue} onChange={handleCompanyChange}/>
            <TextBox type={'text'} placeholder={'Enter job title'} label={'Title'} title={'Title'} value={titleValue} onChange={handleTitleChange}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'} title={'Start Date'} value={startValue} onChange={handleStartChange}/>
                <TextBox className='date-end' type={'date'} label={'End date'} title={'End Date'} value={endValue} onChange={handleEndChange}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter employer address'} label={'Address'} title={'Address'} value={addressValue} onChange={handleAddressChange}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default ExperienceEditForm;