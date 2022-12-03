import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  tasks: [{ id: 0, text: 'Learn HTML and CSS', completed: true }],
};

const rootReducer = (state = initialState, actions) => {
  return state;
};

const enhance = devToolsEnhancer();

const preloadedState = { id: 0, text: 'Learn HTML and CSS', completed: true };

export const store = createStore(rootReducer, enhance);
