import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,db} from '../firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'

export const signin=createAsyncThunk("user/signin",async({email,password})=>{

const userCredential=await signInWithEmailAndPassword(auth,email,password);
const user={
     name:userCredential.user.displayName,
     email:userCredential.user.email

};
await addDoc(collection(db,"users"),user);
return user;
});




export const signUp=createAsyncThunk("user/signup",async({email,password})=>{
const userCredential= await createUserWithEmailAndPassword(auth,email,password);
const user={
    name:userCredential.user.displayName,
    email:userCredential.user.email,
};

return user;
})

export const fetchUser=createAsyncThunk("user/fetch",async()=>{
const querySnapshot=await getDocs(collection(db,"users"));
   const users= querySnapshot.docs.map((doc)=>
    doc.data());
   return users;
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
            // state.users.push(action.payload);
            state.isLoading=false;
            alert("User Sign In successfully!")
        }).addCase(signin.rejected,(state,action)=>{
            state.isLoading=false,
             state.error="Sign In failed"
        }).addCase(signUp.pending,(state)=>{
            state.isLoading=true;
        }).addCase(signUp.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.users.push(action.payload);
            alert("Sign Up successfully!!")
        }).addCase(signUp.rejected,(state)=>{
            state.isLoading=false;
            state.error="Error in sign up ";
        }) .addCase(fetchUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.users=action.payload;
        })
    }
});

export default userSlice.reducer