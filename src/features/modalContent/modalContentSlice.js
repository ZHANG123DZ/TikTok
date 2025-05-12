import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  component: 'login',
};

const modalContentSlice = createSlice({
  name: 'modalContent',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    registerModal: (state) => {
      state.component = 'register';
    },
    loginModal: (state) => {
      state.component = 'login';
    },
    editProfileModal: (state) => {
      state.isOpen = true;
      state.component = 'editProfile';
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  loginModal,
  registerModal,
  openModal,
  closeModal,
  editProfileModal,
} = modalContentSlice.actions;
export default modalContentSlice.reducer;
