import React from 'react'
import '../Promise/Promise.css'

const Emails = (props) => {
    return (
        <div className="promise-comp">
            <h1>Email List</h1>
            <ul>{
                props.emails.map((email) => { 
                    return <li key={email.id}>{email.text}</li>
                })}
            </ul>
        </div>
    ); 
}

export default Emails; 