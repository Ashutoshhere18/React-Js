import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const signin = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };
    await addDoc(collection(db, "users"), user);
    // alert("user added successfully!!");
   
    return user;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    return user;
  }
);

export const fetchUser = createAsyncThunk("user/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  return users;
});
const initialState = {
  users: [],
  currentUser:{},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers:{
    getUser:(state)=>{
   state.currentUser=JSON.parse(localStorage.getItem("user")||("{}"));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        const user=action.payload;
            const isCheck=state.users.find((e)=>e.email==user.email);
            if(!isCheck){
                state.users.push(user);
            }
            localStorage.setItem("user",JSON.stringify(user));
            state.currentUser=user;
            state.isLoading = false;
            alert("user signin successfully !!")
      })
      .addCase(signin.rejected, (state, action) => {
        (state.isLoading = false), (state.error = "Sign In failed");
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
        alert("Sign Up successfully!!");
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error in sign up ";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
export const{getUser}=userSlice.actions;
