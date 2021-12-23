import { createSlice } from '@reduxjs/toolkit';
import filmOperations from './film-operations';

const initialState = {
  movie: [],
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: {
    [filmOperations.getFilms.fulfilled](state, action) {
      state.movie = action.payload;
    },

    [filmOperations.addReviews.fulfilled](state, action) {
      state.movie = state.movie.push(action.payload);
    },

    [filmOperations.deleteReviews.fulfilled](state, action) {
      state.movie = state.movie.filter(
        review => review.id !== action.payload.id,
      );
    },
    [filmOperations.editReviews.fulfilled](state, action) {
      state.movie = state.movie.map(review =>
        review.id === action.payload.id ? action.payload : review,
      );
    },
  },
});

export default filmSlice.reducer;
