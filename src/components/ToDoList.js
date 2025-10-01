import React from 'react'

const ToDoList = ({ todos, setTodos, handleComplete }) => {
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
            {todos.map((item, index) => {
                return (
                  <li key={index}>
                    {item.text}
                    {!item.isComplete && (
                      <button onClick={() => handleComplete(index)}>
                        Complete
                      </button>
                    )}
                  </li>
                )
            })}
        </ul>
    </div>
  )
}

export default ToDoList
