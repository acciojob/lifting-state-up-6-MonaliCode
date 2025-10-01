
import React, { useState } from "react";
import './../styles/App.css';
import ToDoList from "./ToDoList";

const App = () => {
  const[todos,setTodos] = useState([
    {
      text: "Learn React",
      isComplete: false
    },
    {
      text: "Build a React app",
      isComplete: false
    },
    {
      text: "Deploy the React App",
      isComplete:false
    }
  ])
  //console.log(todos)

  function handleComplete(index)
  {
      let temp = [...todos]
      temp[index].isComplete = true
      setTodos(temp)
  }
  


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ToDoList todos={todos} setTodos={setTodos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
