import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const FILM_URL_BASE = 'https://61589d5b5167ba00174bbb76.mockapi.io/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getFilms = createAsyncThunk('films/getFilms', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(null);
  }
  token.set(persistedToken);
  try {
    const { data } = await axios({
      url: 'films',
      baseURL: FILM_URL_BASE,
    });
    console.log(data);
    return data;
  } catch (error) {
    Notiflix.Report.failure();
  }
  return thunkAPI.rejectWithValue(null);
});

const addReviews = createAsyncThunk('films/addReviews', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(null);
  }
  token.set(persistedToken);
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'films',
      baseURL: FILM_URL_BASE,
    });
    // console.log(data);
    return data;
  } catch (error) {
    Notiflix.Report.failure();
  }
  return thunkAPI.rejectWithValue(null);
});

const deleteReviews = createAsyncThunk(
  'films/deleteReviews',
  async credentials => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `/films/${credentials}`,
        baseURL: FILM_URL_BASE,
      });
      console.log(data.id);
      return await data;
    } catch (error) {
      Notiflix.Report.failure();
    }
  },
);

const editReviews = createAsyncThunk('films/editReviews', async credentials => {
  try {
    const { data } = await axios({
      method: 'PUT',
      url: `/films/${credentials.id}`,
      baseURL: FILM_URL_BASE,
    });
    return await data;
  } catch (error) {
    Notiflix.Report.failure();
  }
});

const operations = {
  getFilms,
  addReviews,
  deleteReviews,
  editReviews,
};
export default operations;
