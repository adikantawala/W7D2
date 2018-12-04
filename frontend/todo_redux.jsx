import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app.jsx';


// let store = configureStore();
// window.configureStore = configureStore;

function Root() {
  return(
    <div>
      <h1>Todos App</h1>
      <App/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
