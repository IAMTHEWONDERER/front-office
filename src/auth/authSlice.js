import { createSlice } from '@reduxjs/toolkit'
import { userLogin, registerUser } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  isAuthenticated: userToken ? true : false,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.userInfo; // Assuming userInfo is included in the payload
    },
    logoutSuccess: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.isAuthenticated = false
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder
      // login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false
        state.isAuthenticated = true
        state.userInfo = payload
        state.error = null
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        state.success = true // registration successful
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})

export const { logoutSuccess, setCredentials } = authSlice.actions

export default authSlice.reducer
