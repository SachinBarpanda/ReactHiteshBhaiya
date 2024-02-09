import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:1,
            text : "Hello World",
            isEditable : false
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((item)=> 
                item.id !== action.payload)
        },
        updateTodo : (state,action)=>{
            console.log(state.todos);
            state.todos.map((todoItem)=>
                todoItem.id === action.payload.id ? (todoItem.text = action.payload.text) : todoItem
                //check if payload shows error
            )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;