import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            let iTask = (state.length >= 0) ? state.length : 1;
            const newTask = {
                id: iTask++,
                task: action.payload,
                state: false,
            };
           
            state.push(newTask);
        },
        removeTask: (state, action) => {
            const index = state.findIndex((task) => task.id === parseInt(action.payload));
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        changeStateTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            task.state = !task.state;
         },
    },
});

export const { addTask, removeTask, changeStateTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
