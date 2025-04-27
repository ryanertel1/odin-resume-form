import TextBox from './TextBox.jsx';

const EducationEditForm = ({ handleSave, object, ...props }) => {
    return(
        <form onSubmit={handleSave}>
            <TextBox type={'text'} placeholder={'Enter school name'} label={'Institution'} title={'Institution'}/>
            <TextBox type={'text'} placeholder={'Enter degree level and name'} label={'Degree'} title={'Degree'}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'} title={'Start Date'}/>
                <TextBox className='date-end' type={'date'} label={'End date'} title={'End Date'}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter school address'} label={'Address'} title={'Address'}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default EducationEditForm;