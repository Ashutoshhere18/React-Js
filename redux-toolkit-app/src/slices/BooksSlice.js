import {createSlice} from '@reduxjs/toolkit'

const books=createSlice({
    name:"Books",
    initialState:{
       books:[]
    },
    reducers:{
        AddBook:(state,action)=>{
            state.books.push(action.payload)
        },
        RemoveBook:(state,action)=>{
           state.books.splice(action.payload,1)
        },
        // UpdateBook:(state,action)=>{
          
        // }
    }
});


export default books.reducer;
export const{AddBook,RemoveBook}=books.actions;