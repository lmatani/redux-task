import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './todosSlice.js';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});


export default store;