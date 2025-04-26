import TextBox from './TextBox.jsx';

const ExperienceEditForm = ({ handleSave, ...props }) => {
    return(
        <form onSubmit={handleSave}>
            <TextBox type={'text'} placeholder={'Enter employer name'} label={'Employer'}/>
            <TextBox type={'text'} placeholder={'Enter job title'} label={'Title'}/>
            <div className='dates-section'
                style={{
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                <TextBox className='date-start' type={'date'} label={'Start Date'}/>
                <TextBox className='date-end' type={'date'} label={'End date'}/>
            </div>
            <TextBox type={'text'} placeholder={'Enter employer address'} label={'Address'}/>

            <button type='submit'>Save</button>
        </form>
    )
}

export default ExperienceEditForm;