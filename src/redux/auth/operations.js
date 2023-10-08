import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = BASE_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

const handleAsyncThunk = (endpoint, data) => async (credentials, thunkAPI) => {
  console.log('handleAsyncThunk called');
    try {
      const response = await axios.post(endpoint, data || credentials);
      console.log('Server Response:', response.data);
    if (response.data.token) {
      setAuthHeader(response.data.token);
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Something went wrong.');
  }
};

export const register = createAsyncThunk(
  'auth/register',
  handleAsyncThunk('/users/signup')
);

export const logIn = createAsyncThunk(
  'auth/login',
  handleAsyncThunk('/users/login')
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
      console.log('Server Error:', error);
      console.log(
        'Error response data:',
        error.response && error.response.data
      );
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
