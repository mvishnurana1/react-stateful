import React from 'react'; 
import './button.css'; 

const button = (props) => {

    const id = 'id'; 
    
    const newPromise = {
        id: id + `${(Math.random() * 10).toString()}`, 
        promise: 'I will finish the MERN Course and C++/OpenGL course'
    }

    const clickHandler = () => {
        /** 
         *  onClick is a prop for the component
         *  passed via App.js 
         */ 
        props.onClick(newPromise);
    }

    return (
        <div className="button-style">
            {/*  registering the event handler on the button for onClick event */}
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    ); 
}

export default button; 