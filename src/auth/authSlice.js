  // src/authSlice.js
  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  export const registerUser = createAsyncThunk(
    "authSlice/registerUser",
    async (userData, thunkAPI) => {
      try {
        const response = await fetch("http://localhost:3040/api/registeruser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );

  export const loginUser = createAsyncThunk(
    "authSlice/loginUser",
    async (userData, thunkAPI) => {
      try {
        const response = await fetch("http://localhost:3040/api/loginuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );

  const authSlice = createSlice({
    name: "auth",
    initialState: {
      status: "idle",
      error: null,
      user: null,
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(registerUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state) => {
          state.status = "succeeded";
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
        .addCase(loginUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        });
    },
  });

  export default authSlice.reducer;
