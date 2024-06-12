"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
        state.error = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export type { AuthState }
export default authSlice.reducer;
