import React from 'react'

const ToDoList = ({todos, setTodos, handleComplete}) => {
  return (
    <div>
        <h1>Child Component</h1>
        <ul>
            {todos.map((item, index)=>{
                return <li>{item.text}{!item.isComplete && <button onClick={() => {
                  handleComplete(index)
                }}>Complete</button>}</li>
            })}
        </ul>
    </div>
  )
}

export default ToDoList