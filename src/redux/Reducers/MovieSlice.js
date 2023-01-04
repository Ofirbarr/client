import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movieFilter: '',
  superMovies: [],
  spiderMovies: [],
  favorties: [],
  favoritesNotificationTag: 0,
  selected: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSuperMovies: (state, action) => {
      state.superMovies = action.payload;
    },
    setSpiderMovies: (state, action) => {
      state.spiderMovies = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorties.push(action.payload);
    },
    setFavoritesNotificationTag: (state, action) => {
      state.favoritesNotificationTag = state + 1;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setSpiderMovies,
  setSuperMovies,
  setFavorites,
  setSelected,
  setFilter,
} = moviesSlice.actions;

export default moviesSlice.reducer;
