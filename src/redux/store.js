import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: 'Learn HTML and CSS', completed: true },
    { id: 2, text: 'Learn HTML and CSS', completed: true },
    { id: 3, text: 'Learn HTML and CSS', completed: true },
    { id: 4, text: 'Learn HTML and CSS', completed: true },
    { id: 5, text: 'Learn HTML and CSS', completed: true },
  ],
};

const taskSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, actions) {
      state.tasks.push(actions.payload);
    },
    deleteTodo(state, actions) {
      state.tasks = state.tasks.filter(({ id }) => id !== actions.payload);
    },
  },
});

const tasksReducer = taskSlice.reducer;
export const { addTodo, deleteTodo } = taskSlice.actions;

// const taskReducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case 'todo/addTodo': {
//       return {
//         ...state,
//         tasks: [...state.tasks, actions.payload],
//       };
//     }
//     case 'todo/deleteTodo': {
//       return {
//         ...state,
//         tasks: [state.tasks.filter(({ id }) => id !== actions.payload)],
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, actions) {
      return actions.payload;
    },
  },
});
const filterReducer = filterSlice.reducer;
export const { addFilter } = filterSlice.actions;

// const filterReducer = (state = filterInitialState, actions) => {
//   switch (actions.type) {
//     case 'filter': {
//       return actions.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// };

export const store = configureStore({
  reducer: {
    todo: tasksReducer,
    filter: filterReducer,
  },
});
