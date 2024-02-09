import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos({updateStatus}) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    
    let onUpdateClick = function(){};
    useEffect(()=>{
        onUpdateClick = function(id){
            updateStatus({
                status: true,
                id 
            })
        }
    },[onUpdateClick])

    return (
        <>
            <div>Todos</div>
            <ul className=' list-none p-2 bg-slate-600 h-2/3 text-white'>
                {todos.map((todo) =>
                    <li key={todo.id} className='m-auto my-2 p-2 w-1/2 grid grid-cols-3 border-2 border-white  '>
                        {todo.text}
                        <button className='mx-8 border-2 px-6 py-2' onClick={
                        ()=> {
                            onUpdateClick(todo.id);
                            // dispatch(updateTodo({id: todo.id, canEdit: "true"}))
                        }}
                        > Update </button>
                        <button className='border-2 px-6 py-2' onClick={() => dispatch(removeTodo(todo.id))}> X </button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Todos