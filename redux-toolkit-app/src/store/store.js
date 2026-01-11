import {configureStore} from '@reduxjs/toolkit'
import Books from '../slices/BooksSlice'
const store=configureStore({
    reducer:{
        Book:Books
    }
})

export default store;