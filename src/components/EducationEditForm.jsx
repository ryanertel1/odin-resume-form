import TextBox from './TextBox.jsx';

const EducationEditForm = ({ handleSave, ...props }) => {
    return(
        <form onSubmit={handleSave}>
            <TextBox type={'text'} placeholder={'Enter school name'} label={'Institution'}/>
            <TextBox type={'text'} placeholder={'Enter degree level and name'} label={'Degree'}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'}/>
                <TextBox className='date-end' type={'date'} label={'End date'}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter school address'} label={'Address'}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default EducationEditForm;