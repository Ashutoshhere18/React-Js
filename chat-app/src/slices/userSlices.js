import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

export const signin=createAsyncThunk("user/signin",async({email,password})=>{

const userCredential=await signInWithEmailAndPassword(auth,email,password);
const user={
     name:userCredential.user.displayName,
     email:userCredential.user.email

};
return user;
})

const initialState={
    users:[],
    isLoading:false,
    error:null
}

const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(signin.pending,(state,action)=>{
          state.isLoading=true
        }).addCase(signin.fulfilled,(state,action)=>{
            state.users.push(action.payload);
            state.isLoading=false
        }).addCase(signin.rejected,(state,action)=>{
            state.isLoading=false,
             state.error="Sign In failed"
        })
    }
});

export default userSlice.reducer