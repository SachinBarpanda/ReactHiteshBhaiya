import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice'



function AddTodo({onUpdateClick}) {

    const [editMode , setEditMode] = useState(false)
    const [input,setInput] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
      setEditMode(onUpdateClick.status || false);
    }, [dispatch,onUpdateClick]);

    const addTodoHandler = (e)=>{
      e.preventDefault();
      if(editMode) {
        console.log(editMode,input);
        dispatch(updateTodo({id:onUpdateClick.id , text: input }));
        setEditMode(false)
      }
      else{
        console.log(editMode,input);
        dispatch(addTodo(input))
      }
      setInput('');
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {editMode ? "Update Todo" : "Add Todo"}
    </button>
  </form>
  )
}

export default AddTodo