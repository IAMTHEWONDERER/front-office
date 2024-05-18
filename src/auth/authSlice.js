import { createSlice } from '@reduxjs/toolkit';
import { userLogin, registerUser } from './authActions';

const userToken = localStorage.getItem('userToken');
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  loading: false,
  userInfo: userInfo,
  isAuthenticated: !!userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userInfo');
      state.loading = false;
      state.userInfo = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
      localStorage.setItem('userInfo', JSON.stringify(payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = payload;
        localStorage.setItem('userToken', payload.token);
        localStorage.setItem('userInfo', JSON.stringify(payload));
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logoutSuccess, setCredentials } = authSlice.actions;

export default authSlice.reducer;
