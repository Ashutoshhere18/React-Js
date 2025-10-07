import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    products:[],
    isLoading:false,
    error:null
}

const FetchProducts=createAsyncThunk("products/get",async()=>{
  const res= await fetch("https://fakestoreapi.com/products")
  const data =await res.json();
  return data;
})

export const Products=createSlice({
    name:"products",

    initialState:initialState,

    reducers:{
        addBook:(state,action)=>{
            state.products.push(action.payload);
        }
    },

    extraReducers:(builder)=>{
      builder.addCase(FetchProducts.pending,(state)=>{
        state.isLoading=true;
      }).addCase(FetchProducts.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.products=action.payload;
      }).addCase(FetchProducts.rejected,(state)=>{
        state.isLoading=false;
        state.error="Can't get products"
      })
    }
})

export default Products.reducer;
export const {addBook}=Products.actions;