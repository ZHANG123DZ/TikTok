import { createSlice } from '@reduxjs/toolkit';
import { loginHandle } from './loginAsync';

const initialState = {
  component: 'optionLogin',
  isLoading: false,
  isAuth: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    phoneLogin: (state) => {
      state.component = 'phoneLogin';
    },
    emailLogin: (state) => {
      state.component = 'emailLogin';
    },
    optionLogin: (state) => {
      state.component = 'optionLogin';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginHandle.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = true;
    });
    builder.addCase(loginHandle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginHandle.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
    });
  },
});

export const { phoneLogin, emailLogin, optionLogin, finalLogin } =
  loginSlice.actions;
export default loginSlice.reducer;
