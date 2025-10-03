import {createSlice} from '@reduxjs/toolkit'

const todosSlice=createSlice({
    name:"todo",
    initialState:{
        message:"this is todo slice",
        todos:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            const data=action.payload;
            state.todos.push(data);
        },
        removeTodo:(state,action)=>{}
    }
});

export default todosSlice.reducer;
export const{addTodo,removeTodo}=todosSlice.actions;