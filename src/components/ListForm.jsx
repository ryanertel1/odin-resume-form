import React, { useState, useId } from "react";
import '../styles/ListFormStyles.css';
import ExpandButton from './ExpandButton.jsx';
import EducationEditForm from './EducationEditForm.jsx';
import ExperienceEditForm from './ExperienceEditForm.jsx';
import { MdEdit, MdDeleteForever } from "react-icons/md";

let nextId = 0;

const ListForm = ({ title, formType, ...props }) => {

    const [expandState, setExpandState] = useState(false);
    const [editState, setEditState] = useState(false);
    const [editIndex, setEditIndex] = useState(0);
    const [list, setList] = useState();

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

    const handleAdd = () => {
        setEditState(true);
        setEditIndex(list ? list.length:0);
        const newList = list ? [...list]:[];
        newList.push({placeholder: '', id: nextId});
        nextId++;
        setList(newList);
    }

    const handleEdit = (e) => {
        const index = findIndex(e.currentTarget.parentElement.id);
        if(index > -1) {
            setEditState(true);
            setEditIndex(index)
        }
    }

    const handleDelete = (e) => {
        const newList = [...list];

        const index = findIndex(e.currentTarget.parentElement.id);
        if(index > -1) {
            newList.splice(index, 1);
            setList(newList);
        }

    }

    const findIndex = (findId) => {
        return list.findIndex(item => item.id == parseInt(findId));
    }

    function handleSave(e) {
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
                placeholder: e.target.elements[0].value,
                id: nextId,
            } }

            nextId++;

        let newList = [...list];
        newList[editIndex] = newEntry;

        setList(newList);
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
                        { list ?
                        list.map((item, index) => (
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
                                object = {list[editIndex]}
                                className = 'edit-form'
                            />:
                            <ExperienceEditForm
                                handleSave = {handleSave}
                                object = {list[editIndex]}
                                className = 'edit-form'
                            />
                        }
                    </>
                }
            </div>
        </>
    )
}

export default ListForm;