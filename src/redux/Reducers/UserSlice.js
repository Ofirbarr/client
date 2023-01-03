import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  isRegistered: false,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsRegistered: state => {
      state.isRegistered = true;
    },
    setIsLoggedIn: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {setPassword, setUsername, setIsLoggedIn, setIsRegistered} =
  userSlice.actions;

export default userSlice.reducer;
