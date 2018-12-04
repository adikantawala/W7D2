import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app.jsx';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';


// let store = configureStore();
// window.configureStore = configureStore;

// function Root() {
//   return(
//     <div id="content">
//       <h1>Todos App</h1>
//       <App/>
//     </div>
//   );
// }

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}/>, document.getElementById('main'));
});
