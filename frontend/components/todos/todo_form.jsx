import React from 'react';
import uniqueId from '../../util/todo_form_util.jsx';

class TodoForm extends React.Component {
  constructor(props, title, body, done){
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: uniqueId(),
      title: "",
      body: "",
    });
  }

  render (){
    return (
      <form onSubmit={this.handleSubmit} className="todo-Form" action="index.html" method="post">
        <label>Title
          <input onChange={this.update("title")} value={this.state.title}/>
        </label>

        <label>Body
          <input onChange={this.update("body")} value={this.state.body}/>
        </label>

        <input type="submit" name="" value="Submit your todo!"/>
      </form>
    );
  }
}

export default TodoForm;
