import React, { useState, useId } from "react";
import '../styles/ListFormStyles.css';
import ExpandButton from './ExpandButton.jsx';
import EducationItem from './EducationItem.jsx';
import ExperienceItem from './ExperienceItem.jsx';
import EducationEditForm from './EducationEditForm.jsx';
import ExperienceEditForm from './ExperienceEditForm.jsx';

const initialList = [{
    placeholder: 'Fake University',
}];

const ListForm = ({ title, formType, ...props }) => {

    const [expandState, setExpandState] = useState(false);
    const [editState, setEditState] = useState(false);
    const [list, setList] = useState(initialList);

    const style = {
        transform: expandState ? 'rotate(360deg)':'',
        transition: 'transform 400ms ease',
    }

    const handleExpand = () => {
        setExpandState(!expandState);
    }

    const handleAdd = () => {
        setEditState(true);
    }

    function handleSave(event) {
        event.preventDefault();

        let newEntry;

        { formType === 'education' ?
            newEntry = {
                school: event.target.elements[0].value,
                degree: event.target.elements[1].value,
                start: event.target.elements[2].value,
                end: event.target.elements[3].value,
                location: event.target.elements[4].value,
            }:
            newEntry = {
                company: event.target.elements[0].value,
                title: event.target.elements[1].value,
                start: event.target.elements[2].value,
                end: event.target.elements[3].value,
                location: event.target.elements[4].value,
            } }

        setEditState(false);
        console.log(event.target, newEntry);
    }

    return (
        <>
            <div className='list-container'>
                <div className='list-header'>
                    <h2>{ title ? title:'empty'}</h2>
                    <ExpandButton
                        onClick={handleExpand}
                        style={style}
                    />
                    </div>
                { !editState ?
                    <>
                        <ul>
                        {list.map((item) => (
                            <li key={useId}>
                                <span>{item.placeholder}</span>
                            </li>
                        ))}
                        </ul>
                        <button className='add-button' onClick={handleAdd}>Add</button>
                    </>:
                    <>
                        { formType === 'education' ?
                            <EducationEditForm 
                                handleSave = {handleSave}
                            />:
                            <ExperienceEditForm
                                handleSave = {handleSave}
                            />
                        }
                    </>
                }
            </div>
        </>
    )
}

export default ListForm;