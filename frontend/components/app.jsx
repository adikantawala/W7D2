import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container.jsx';

class App extends React.Component{
  render() {
    return (<div>
        <h1>app stuff</h1>
        <TodoListContainer /> </div>
    );
  }
}

export default App;
