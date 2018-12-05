import React from 'react';
import TodoForm from './todo_form';
export default (props) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>{props.todos.map( (el) => <li key={el.id}>{el.title}</li>)}</ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
  </div>
);
};
