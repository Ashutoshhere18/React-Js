import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


const initialState={
    products:[],
    isLoading:false,
    error:null
}

export  const fetchProducts=createAsyncThunk("products/get",async()=>{
  const res= await fetch("http://localhost:3000/products")
  const data =await res.json();
  return data;
})

export const insertProducts=createAsyncThunk("products/post",async({title,views})=>{
 const res= await axios.post("http://localhost:3000/products",{title:title,views:views});
 return res.data;
})

export const productSlice=createSlice({
    name:"products",

    initialState:initialState,

    reducers:{
        addBook:(state,action)=>{
            state.products.push(action.payload);
        }
    },

    extraReducers:(builder)=>{
      builder.addCase(fetchProducts.pending,(state)=>{
        state.isLoading=true;
      }).addCase(fetchProducts.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.products=action.payload;
      }).addCase(fetchProducts.rejected,(state)=>{
        state.isLoading=false;
        state.error="Can't get products"
      }).addCase(insertProducts.pending,(state)=>{
        state.isLoading=true;
      }).addCase(insertProducts.fulfilled,(state,action)=>{
        state.isLoading=false;
         state.products.push(action.payload)
      }).addCase(insertProducts.rejected,(state)=>{
        state.isLoading=false;
        state.error="Can't insert products!"
      });
    }
});

export default productSlice.reducer;
export const {addBook}=productSlice.actions;