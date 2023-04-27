import React,{useState} from 'react'

const FormItem = ({onSubmit}) => {
    const [newItem, setNewItem]= useState("");

    function handleSubmit(e){
        e.preventDefault()

        // if(newItem === "")
        //     return onSubmit(newItem)
        onSubmit(newItem)
        setNewItem("")
     
        }

  return (
    <form 
    onSubmit={handleSubmit}
    className="formitems pb-5">
      <div className="newitem flex flex-col pb-3">
        <label htmlFor="item" className="font-bold text-white">New Item</label>
        <input 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item"
        placeholder="Type what you have in mind today..." 
        className="focus:outline-none border-b-2 text-white border-transparent border-blue-300  bg-transparent pt-2" />
      </div>
      <button className="btn-add w-full py-3 px-3 bg-slate-300 cursor-pointer rounded-t-none rounded-b-md">Add todo</button>
    </form>
  )
}

export default FormItem;