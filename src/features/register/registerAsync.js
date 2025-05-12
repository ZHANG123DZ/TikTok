import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const registerHandle = createAsyncThunk(
  'register/registerHandle',
  async (payload) => {
    const res = await authService.register(payload);
    return res.data;
  }
);
