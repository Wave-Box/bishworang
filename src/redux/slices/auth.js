import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../../services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));
export const signUp = createAsyncThunk(
  "auth/register",
  async ({ name, email, phone, password }, thunkAPI) => {
    try {
      const response = await AuthService.signUp(name, email, phone, password);

      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async ({ userid, otp }, thunkAPI) => {
    try {
      const response = await AuthService.verify_phone(userid, otp);

      thunkAPI.dispatch(setMessage(response.data.error));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


// User Forgot Password 
export const forgot = createAsyncThunk(
  "auth/forgot",
  async ({ store_id, phone, }, thunkAPI) => {
    try {
      const response = await AuthService.forgot(store_id, phone,);

      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, password }, thunkAPI) => {
    try {
      const { details } = await AuthService.login(phone, password);
      return { user: details };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async ({ name, email, access_token, imageurl }, thunkAPI) => {
    try {
      const { details } = await AuthService.googleLogin(name, email, access_token, imageurl);
      return { user: details };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, success: '' }
  : { isLoggedIn: false, user: null, success: '' };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.success = action.payload.success
      state.user = action.payload.user
    },
    [signUp.rejected]: (state, action) => {
      state.isLoggedIn = false;
      // custom 
      state.success = ''
    },

    [verify.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.success = action.payload.success
      if (action.payload.error) {
        setMessage(action.payload.error)
        state.success = ''
      }
      console.log(action.payload);
    },

    [verify.rejected]: (state, action) => {
      console.log(action.payload);
      state.success = ''
    },

    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [googleLogin.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.success = ''
    },
  },
});
const { reducer } = authSlice;
export default reducer;