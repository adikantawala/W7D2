import React from 'react';
export default (props) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>{props.todos.map( (el) => <li key={el.id}>{el.title}</li>)}</ul>

  </div>
);
};
