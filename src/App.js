import React, { useState, useEffect } from "react";
import FormItem from "./form";
import Todolist from "./todolist";

function App() {

  const[todos, setTodos] = useState(()=>{

    const localValue= localStorage.getItem("ITEMS")
       if(localValue === null)
         return []
         return JSON.parse(localValue)
  });

  useEffect(()=>{
      //store our todos using local storage
      localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function toggleToDo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
         if(todo.id === id){
          return  {...todo, completed}
         }
         return todo
      })
    })
  }
   function addToDo(title){
     setTodos(currentTodos =>{
           return[
             ...currentTodos,
             {id:crypto.randomUUID(), title, completed:false}
           ]
        })
   }  

  function deleteToDo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="max-w-md mx-auto pt-10 px-12 space-x-4 flex flex-col">
     <FormItem onSubmit={addToDo} />
      <h1 className="font-bold text-3xl pb-5 text-white underline">My Tasks</h1>
     <Todolist todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
