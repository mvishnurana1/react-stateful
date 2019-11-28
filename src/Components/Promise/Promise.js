import React from 'react'; 
import './Promise.css'; 

const Promise = (props) => {
    return(
        <div className="promise-comp">
            <h1>My Promises!</h1>
            <ul>
                {props.pr.map((promise) => {
                    return <li key={promise.id}> {promise.promise}</li>
                })}
            </ul>
        </div>
    ); 
}

export default Promise; 