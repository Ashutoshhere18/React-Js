import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlices'
import chatReducer from '../slices/ChatSlices'

export const store=configureStore({
    reducer:{
        user:userReducer,
        chats:chatReducer,
    }
});