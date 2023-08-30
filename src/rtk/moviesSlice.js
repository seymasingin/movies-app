import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

export const moviesSlice = createSlice({
    name : "movie",
    initialState,
    reducers: {
      addMovie: (state, action) => {
        state.movies= action.payload
      }
    }
});

export const allMovies = (state) => state.movies.movies
export const {addMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
