import React, { useState, useId } from "react";
import '../styles/ListFormStyles.css';
import ExpandButton from './ExpandButton.jsx';

const ListForm = ({ title, ...props }) => {

    const [expandState, setExpandState] = useState(false);

    const style = {
        transform: expandState ? 'rotate(0deg)':'',
        transition: 'transform 400ms ease',
    }

    const handleExpand = () => {
        setExpandState(expandState ? false:true);
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
                <ul>
                    <li>1st</li>
                </ul>
            </div>
        </>
    )
}

export default ListForm;