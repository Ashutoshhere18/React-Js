
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { 
  collection, 
  getDocs, 
  setDoc, 
  doc 
} from 'firebase/firestore';

/* SIGN IN */
export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = {
      name: userCredential.user.displayName || "",
      email: userCredential.user.email,
    };

    // store user in firestore
    await setDoc(doc(db, "users", userCredential.user.uid), user);

    return user;
  }
);

/* SIGN UP  */
export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = {
        name: userCredential.user.displayName || "",
        email: userCredential.user.email,
      };

      return user;
    } catch (error) {
      console.log("Firebase Error:", error.code, error.message);
      return rejectWithValue(error.code);
    }
  }
);


/* FETCH USERS*/
export const fetchUser = createAsyncThunk(
  "user/fetch",
  async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return users;
  }
);

/*  SLICE */
const initialState = {
  users: [],
  currentUser: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.currentUser = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
    },
  },
  extraReducers: (builder) => {
    builder

      /* SIGN IN  */
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const user = action.payload;

        const exists = state.users.find(
          (u) => u.email === user.email
        );

        if (!exists) {
          state.users.push(user);
        }

        state.currentUser = user;
        state.isLoading = false;

        localStorage.setItem("user", JSON.stringify(user));
        alert("User signed in successfully!");
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
        state.error = "Sign in failed!";
      })

      /*  SIGN UP */
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        alert("Sign up successful!");
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
        state.error = "Sign up failed!";
      })

      /*FETCH USERS */
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to fetch users!";
      });
  },
});

export default userSlice.reducer;
export const { getUser } = userSlice.actions;
