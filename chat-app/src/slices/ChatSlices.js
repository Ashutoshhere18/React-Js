import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {db} from '../firebase'
import {doc,setDoc,addDoc,getDocs,collection} from 'firebase/firestore'

const initialstate={
    chats:[],
    isLoading:false,
    error:null
}

export const sendMessege=createAsyncThunk('chat/send',async(chat,sender,receiver)=>{
    const docId= sender+'_'+receiver
   await setDoc(doc(db,"Chatroom",docId,{
        messege:"Hello Man"
    }))
})

const chatSlice=createSlice({

    name:'chats',
    initialstate:initialstate,
    extraReducers:(builder)=>{
        builder.addCase(sendMessege.pending,(state)=>{
          state.isLoading=true;
        }).addCase(sendMessege.fulfilled,(state)=>{
                 state.isLoading=false;
                 alert("Messege Sent Successfully");
        }).addCase(sendMessege.rejected,(state)=>{
            state.isLoading=false;
            state.error="Error in sending messege";
        })
    }

})

export default chatSlice.reducer;

