// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true
});

export default store;