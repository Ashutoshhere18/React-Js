import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    products:[],
    isLoading:false,
    error:null
}

export  const fetchProducts=createAsyncThunk("products/get",async()=>{
  const res= await fetch("https://fakestoreapi.com/products")
  const data =await res.json();
  return data;
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
      })
    }
})

export default productSlice.reducer;
export const {addBook}=productSlice.actions;