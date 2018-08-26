import React, { Component } from 'react'
import Header from './Header';
import Todos from './Todos';
import AddOption from './AddOption';
import { generateRandomInt } from './../utils/utils';
import TodoModal from './TodoModal';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveAllTodos = this.handleRemoveAllTodos.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleRandomSelectTodo = this.handleRandomSelectTodo.bind(this);
    this.handleClearSelectedTodo = this.handleClearSelectedTodo.bind(this);
    this.state = {
      todos: [],
      isSelected: undefined,
    };
  }

  componentDidMount() {
    try {
      const jsonString = localStorage.getItem('todos');
      const todos = JSON.parse(jsonString);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (e) {
      console.log('did-mount', e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const jsonString = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', jsonString);
    }
  }

  handleAddTodo(todo) {
    if (!todo) {
      return 'Please Enter a Valid Todo';
    } else if (this.state.todos.indexOf(todo) > -1) {
      return 'Already Included'
    }

    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }));
  }

  handleRemoveAllTodos() {
    this.setState(() => ({
      todos: []
    }));
  }

  handleRemoveTodo(todoToRemove) {
    if (todoToRemove) {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => todo !== todoToRemove)
      }));
    }
  }

  handleClearSelectedTodo() {
    this.setState(() => ({
      isSelected: undefined
    }));
  }

  handleRandomSelectTodo() {
    let randomTodo = this.state.todos[generateRandomInt(this.state.todos.length)];
    this.setState(() => ({
      isSelected: randomTodo
    }));
    console.log(this.state.isSelected);
  }



  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto">
            <div className="card card-body text-center">
              <Todos
              todos={this.state.todos} 
              handleRemoveAllTodos={this.handleRemoveAllTodos} 
              handleRemoveTodo={this.handleRemoveTodo}
              handleRandomSelectTodo={this.handleRandomSelectTodo}
              />
              <AddOption 
              handleAddTodo={this.handleAddTodo} 
              />
            </div>
          </div>
        </div>
        <TodoModal
          isSelected={this.state.isSelected}
          handleClearSelectedTodo={this.handleClearSelectedTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
