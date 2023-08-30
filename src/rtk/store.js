import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "../rtk/moviesSlice";

export const store = configureStore({
    reducer: { 
        movies: moviesReducer
     },
})