import React, { useState, useCallback, useEffect } from "react";
import '../styles/ListFormStyles.css';
import ExpandButton from './ExpandButton.jsx';
import EducationEditForm from './EducationEditForm.jsx';
import ExperienceEditForm from './ExperienceEditForm.jsx';
import { MdEdit, MdDeleteForever } from "react-icons/md";

let nextId = 0;

const ListForm = ({ title, formType, handleData, data }) => {

    const [expandState, setExpandState] = useState(false);
    const [editState, setEditState] = useState(false);
    const [editIndex, setEditIndex] = useState(0);

    const rotateStyle = {
        transform: expandState ? 'rotate(360deg)':'',
        transition: 'transform 400ms ease',
    }
    const expandStyle = {
        display: expandState ? 'block':'none',
    }

    const handleExpand = () => {
        setExpandState(!expandState);
    }

    const findIndex = (findId) => {
        return data.findIndex(item => item.id == parseInt(findId));
    }

    const handleAdd = () => {
        let newData = data ? [...data]:[];
        newData.push({placeholder: '', id: nextId});
        nextId++;
        setEditState(true);
        setEditIndex(newData.length-1);
        handleData(newData);
    }
    const handleDelete = (e) => {
        const newData = [...data];
        const index = findIndex(e.currentTarget.parentElement.id);
        if(index > -1) {
            newData.splice(index, 1);
            handleData(newData);
        }
    }
    const handleEdit = (e) => {
        const index = findIndex(e.currentTarget.parentElement.id)
        if(index > -1) {
            setEditState(true);
            setEditIndex(index)
        }
    }
    const handleSave = (e) => {
        e.preventDefault();

        let newEntry;

        { formType === 'education' ?
            newEntry = {
                school: e.target.elements[0].value,
                degree: e.target.elements[1].value,
                start: e.target.elements[2].value,
                end: e.target.elements[3].value,
                location: e.target.elements[4].value,
                placeholder: e.target.elements[0].value,
                id: nextId,
            }:
            newEntry = {
                company: e.target.elements[0].value,
                title: e.target.elements[1].value,
                start: e.target.elements[2].value,
                end: e.target.elements[3].value,
                location: e.target.elements[4].value,
                description: e.target.elements[5].value,
                placeholder: e.target.elements[0].value,
                id: nextId,
            } }

            nextId++;

            let newData = [...data];
            newData[editIndex] = newEntry;
            handleData(newData);
            setEditState(false);
    }

    return (
        <>
            <div className='list-container'>
                <div className='list-header'>
                    <h2>{ title ? title:'empty'}</h2>
                    <ExpandButton
                        className='expand-button'
                        onClick={handleExpand}
                        style={rotateStyle}
                    />
                    </div>
                { !editState ?
                    <>
                        <ul style={expandStyle}>
                        { data ?
                        data.map((item, index) => (
                            <li id={item.id} key={(item.id + item.placeholder)} className='list-item'>
                                <span>{item.placeholder}</span>
                                <button className='edit-button' onClick={handleEdit}><MdEdit className='edit-icon' /></button>
                                <button className='delete-button' onClick={handleDelete}><MdDeleteForever className='delete-icon' /></button>
                            </li>
                        )):<></>}
                        </ul>
                        <button className='add-button' onClick={handleAdd} style={expandStyle}>Add</button>
                    </>:
                    <>
                        { formType === 'education' ?
                            <EducationEditForm
                                handleSave = {handleSave}
                                object = {data[editIndex]}
                                className = 'edit-form'
                                style={expandStyle}
                            />:
                            <ExperienceEditForm
                                handleSave = {handleSave}
                                object = {data[editIndex]}
                                className = 'edit-form'
                                style={expandStyle}
                            />
                        }
                    </>
                }
            </div>
        </>
    )
}

export default ListForm;