import { configureStore } from "@reduxjs/toolkit";
import booksRedecer from './books/booksReducer'

export const store = configureStore({
    reducer: {
        books: booksRedecer,
    }
})