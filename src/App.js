import React, { useState } from 'react';
import GoalList from './Components/GoalList/GoalList'; 
import Dreams from './Components/Dream/dreams'; 
import NewGoal from './Components/NewGoal/NewGoal'; 
import Promise from './Components/Promise/Promise'; 
import PersonalInfo from './Components/PersonalInfo/personalInfo'; 
import Emails from './Components/Emails/Emails'; 
import Button from './Components/Button/button'; 

const App = () => {
  // Array destructing syntax
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Build Mobile Apps'}, 
    {id: 'cg2', text: 'Use only the MERN Stack'}, 
    {id: 'cg3', text: 'Build some great usable applications'}
  ]);  

  const [promises, setPromises] = useState([
    {id: 'p1', promise: 'Use OpenGL shaders'}, 
    {id: 'p2', promise: 'Build the Target Apps using the MERN stack'}, 
    {id: 'p3', promise: 'Don\'t get a job, if want a happy life'}
  ]); 

  const [emails, setEmails] = useState([]); 

  const addEmails = (newEmail) => {
    setEmails((prevEmails) => prevEmails.concat(newEmail));
    console.log(emails);  
  }

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal)); 
    setCourseGoals((prevCourseGoals) =>  prevCourseGoals.concat(newGoal)); 
    console.log(courseGoals); 
  }; 

  const onButtonClickHandler = (newPromise) => {
    //setPromises(promises.concat(newPromise));
    setPromises((prevPromises) => prevPromises.concat(newPromise))
    console.log(newPromise);  
  }

  return (
    <div>
        {/* onAddGoal is the prop which takes pointer to the function */}
        <NewGoal onAddGoal = { addNewGoalHandler } />
        <PersonalInfo newEmail = { addEmails } />
        <Button onClick = { onButtonClickHandler }/>
        <GoalList goals = { courseGoals }/>
        <Emails emails={emails}/>
        <Dreams />
        <Promise pr = { promises }/>
    </div>
  );
}

export default App;