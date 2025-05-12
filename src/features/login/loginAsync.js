import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const loginHandle = createAsyncThunk(
  'Login/LoginHandle',
  async (payload) => {
    const res = await authService.login(payload);
    return res.data;
  }
);
