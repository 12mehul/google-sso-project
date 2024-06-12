"use client"
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../slices/authSlice';

interface RootState {
    auth: AuthState;
}

export const store =
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });


export type { RootState }
export type AppDispatch = typeof store.dispatch;
