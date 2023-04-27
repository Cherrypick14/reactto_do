import React from 'react'

const Todoitem = ({completed, title, id, toggleToDo, deleteToDo}) => {
  return (
    <li className="mainlist" >
            <label>
              <input
              onChange={e => toggleToDo(id, e.target.checked)}
              type="checkbox" 
              className="w-5 h-5 " 
              checked={completed} 
               />
              <span className="text-white">{title} </span> 
            </label>
            <button className="btn-delt mb-3" onClick={()=> deleteToDo(id)}>Delete</button>
          </li>
  )
}

export default Todoitem;