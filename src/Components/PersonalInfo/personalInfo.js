import React, { useState } from 'react'
import './personalInfo.css'; 

const PersonalInfo = (props) => {

    const [enteredInput, setEnteredInput] = useState(''); 

    let onSubmitHandler = (event) => {

        event.preventDefault(); 

        const info = {
            id   : Math.random().toString(), 
            text : enteredInput
        }; 

        console.log(info);

        setEnteredInput(''); 

        props.newEmail(info);

        console.log(info); 
    }

    let textChangeHandler = (event) => {
        setEnteredInput(event.target.value); 
    }

    return (
        <div className = "personalInfo">
            <form onSubmit={onSubmitHandler}>
                <h1>Personal Information Collector</h1>
                <input placeholder="email" type="text" value={enteredInput} onChange={textChangeHandler}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    ); 
}

export default PersonalInfo; 