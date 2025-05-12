import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  link: location.pathname + location.search,
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    nextUrl: (state, action) => {
      state.link = action.payload;
    },
  },
});

export const { nextUrl } = urlSlice.actions;
export default urlSlice.reducer;
