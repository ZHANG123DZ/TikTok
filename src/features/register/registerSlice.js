import { createSlice } from '@reduxjs/toolkit';
import { registerHandle } from './registerAsync';

const initialState = {
  component: 'optionRegister',
  isLoading: false,
  currentUser: null,
  isAuth: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    phoneRegister: (state) => {
      state.component = 'phoneRegister';
    },
    emailRegister: (state) => {
      state.component = 'emailRegister';
    },
    finalRegister: (state, action) => {
      state.component = 'finalRegister';
      state.currentUser = action.payload;
    },
    optionRegister: (state) => {
      state.component = 'optionRegister';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerHandle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isAuth = true;
    });
    builder.addCase(registerHandle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerHandle.rejected, (state) => {
      state.isLoading = false;
      state.currentUser = null;
      state.isAuth = false;
    });
  },
});

export const { phoneRegister, emailRegister, optionRegister, finalRegister } =
  registerSlice.actions;
export default registerSlice.reducer;
