import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../Reducers/UserSlice';
import moviesSlice from '../Reducers/MovieSlice';

const store = configureStore({
  reducer: {
    userSlice,
    moviesSlice,
  },
});

export default store;
