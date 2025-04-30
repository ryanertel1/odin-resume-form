import TextBox from './TextBox.jsx';
import React, { useState } from "react";

const EducationEditForm = ({ handleSave, object, ...props }) => {
    const [schoolValue, setSchoolValue] = useState(object.school);
    const [degreeValue, setDegreeValue] = useState(object.degree);
    const [startValue, setStartValue] = useState(object.start);
    const [endValue, setEndValue] = useState(object.end);
    const [addressValue, setAddressValue] = useState(object.location);

    function handleSchoolChange(event) {
        setSchoolValue(event.target.value);
    }
    function handleDegreeChange(event) {
        setDegreeValue(event.target.value);
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
            <TextBox type={'text'} placeholder={'Enter school name'} label={'Institution'} title={'Institution'} value={schoolValue} onChange={handleSchoolChange}/>
            <TextBox type={'text'} placeholder={'Enter degree level and name'} label={'Degree'} title={'Degree'} value={degreeValue} onChange={handleDegreeChange}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'} title={'Start Date'} value={startValue} onChange={handleStartChange}/>
                <TextBox className='date-end' type={'date'} label={'End date'} title={'End Date'} value={endValue} onChange={handleEndChange}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter school address'} label={'Address'} title={'Address'} value={addressValue} onChange={handleAddressChange}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default EducationEditForm;