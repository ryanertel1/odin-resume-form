import TextBox from './TextBox.jsx';

const ExperienceEditForm = ({ handleSave, object, ...props }) => {
    return(
        <form onSubmit={handleSave}>
            <TextBox type={'text'} placeholder={'Enter employer name'} label={'Employer'} title={'Employer'} value={object.company}/>
            <TextBox type={'text'} placeholder={'Enter job title'} label={'Title'} title={'Title'}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'} title={'Start Date'}/>
                <TextBox className='date-end' type={'date'} label={'End date'} title={'End Date'}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter employer address'} label={'Address'} title={'Address'}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default ExperienceEditForm;