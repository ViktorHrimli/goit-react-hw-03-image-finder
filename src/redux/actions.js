import { nanoid } from 'nanoid';

export const addTodo = text => {
  return {
    type: 'todo/addTodo',
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
};

export const deleteTodo = id => {
  return {
    type: 'todo/deleteTodo',
    payload: id,
  };
};

export const filterText = text => {
  return {
    type: 'filter',
    payload: text,
  };
};
