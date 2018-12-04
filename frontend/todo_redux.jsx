import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodos} from './actions/todo_actions';


// let store = configureStore();
// window.configureStore = configureStore;

function Root() {
  return(
    <div>
      <h1>Todos App</h1>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root/>, document.getElementById('main'));
});