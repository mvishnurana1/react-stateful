/**
 * @file Manages the NewGoal form on the  UI. 
 * @author Vishnu Rana <mvishnurana@gmail.com>
 */
import React, { useState } from 'react'
import './NewGoal.css'; 

/** @function 
 *  @name NewGoal 
*/
const NewGoal = (props) => {

    const [enteredText, setEnteredText]  = useState(''); 

    const addGoalHandler = (event) => {  
        event.preventDefault(); 

        const newGoal = {
            id: Math.random().toString(), 
            text: enteredText
        }; 

        console.log(newGoal); 

        // resetting the value of the variable post submission. 
        setEnteredText(''); 

        // the pointer to the function takes the argument
        // and pushes to the array of objects and 
        // displays it on the console
        props.onAddGoal(newGoal); 
        console.log(newGoal); 
    }; 

    const textChangeHandler = event => {
        setEnteredText(event.target.value); 
    }; 

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            {/* onChange event handler for the input field */}
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add Goal</button>
        </form>
    ); 
}

export default NewGoal; 