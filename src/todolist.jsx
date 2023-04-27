import React from 'react'
import Todoitem from './todoitem'

const Todolist = ({todos,toggleToDo,deleteToDo}) => {

  return (
    <ul className="list">
    {todos.length === 0 && "Lay out your tasks"}
      {todos.map(todos =>{
          return(
           <Todoitem {...todos}
           toggleToDo={toggleToDo}
           deleteToDo={deleteToDo}
            // completed={todos.completed} 
            // id={todos.id}
            // title={todos.title} 
            key={todos.id}/>
          )
      })}
    </ul>
  )
}

export default Todolist