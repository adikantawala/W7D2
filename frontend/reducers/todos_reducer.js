import {receiveTodos, receiveTodo} from "../actions/todo_actions.js";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const RECEIVE_TODOS = 'RECEIVE_TODOS';
const RECEIVE_TODO = 'RECEIVE_TODO';

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      // return action.todos;
      let nextState = {};
      for(let i = 0; i < action.todos.length; i++){
        nextState[action.todos[i].id] = action.todos[i];
      }
      return nextState;
    case RECEIVE_TODO:
      let nextState2 = merge({}, state);
      nextState2[action.todo.id] = action.todo;
      return nextState2;
      
    default:
      return state;
  }
};

export default todosReducer;