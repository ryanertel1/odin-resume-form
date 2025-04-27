import React, { useState, useId } from "react";
import '../styles/ListFormStyles.css';
import ExpandButton from './ExpandButton.jsx';
import EducationItem from './EducationItem.jsx';
import ExperienceItem from './ExperienceItem.jsx';
import EducationEditForm from './EducationEditForm.jsx';
import ExperienceEditForm from './ExperienceEditForm.jsx';

const initialList = [{
    placeholder: 'Fake University',
    id: 0,
}];

let nextId = 1;

const ListForm = ({ title, formType, ...props }) => {

    const [expandState, setExpandState] = useState(false);
    const [editState, setEditState] = useState(false);
    const [editIndex, setEditIndex] = useState(0);
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
        setEditIndex(list.length);
        const newList = [...list];
        newList.push({placeholder: '', id: nextId});
        nextId++;
        setList(newList);
    }

    const handleEdit = (e) => {
        const index = findIndex(e.target.parentElement.id);
        if(index > -1) {
            setEditState(true);
            setEditIndex(index)
        }
    }

    const handleDelete = (e) => {
        const newList = [...list];

        const index = findIndex(e.target.parentElement.id);
        if(index > -1) {
            newList.splice(index, 1);
            setList(newList);
        }

    }

    const findIndex = (findId) => {
        return list.findIndex(item => item.id == parseInt(findId));
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
        console.log(`target: ${event.target}\nnew entry: ${newEntry}`);
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
                        {list.map((item, index) => (
                            <li id={item.id} key={(item.id + item.placeholder)}>
                                <span>{item.placeholder}</span>
                                <button className='edit-button' onClick={handleEdit}>Edit</button>
                                <button className='delete-button' onClick={handleDelete}>Delete</button>
                            </li>
                        ))}
                        </ul>
                        <button className='add-button' onClick={handleAdd}>Add</button>
                    </>:
                    <>
                        { formType === 'education' ?
                            <EducationEditForm
                                handleSave = {handleSave}
                                object = {list[editIndex]}
                            />:
                            <ExperienceEditForm
                                handleSave = {handleSave}
                                object = {list[editIndex]}
                            />
                        }
                    </>
                }
            </div>
        </>
    )
}

export default ListForm;