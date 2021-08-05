import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";
import Controller from "../Controllers";
import ListView from "../ListView";
import TableView from "../TableView";
import TodoForm from "../TodoForm";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: "1",
        text: "Main todo text",
        description: "Description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "2",
        text: "Main todo text",
        description: "Description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    seachTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos: todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos: todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleFilter = (filter) => {
    this.setState({ filter });

  };
  handleSearch = (value) => {
    this.setState({ seachTerm: value });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.seachTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const {filter} = this.state
    if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete) 
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  }
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);

    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    this.toggleForm();

    const todos = [todo, ...this.state.todos];

    this.setState({ todos });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  clearSelected = () => {
    const todos = [...this.state.todos];
    const unselectedItems = todos.filter((todo) => todo.isSelect === false);
    this.setState({ todos: unselectedItems });
  };
  clearCompleted = () => {
    const todos = [...this.state.todos];
    const unCompletedItems = todos.filter((todo) => todo.isComplete === false);

    this.setState({ todos: unCompletedItems });
  };
  reset = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div>
        <h2 className="display-4 mb-5 text-center"> React Todo</h2>
        <Controller
          term={this.state.term}
          // toggleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          handleFilter={this.handleFilter}
          changeView={this.changeView}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
          view={this.state.view}
          handleSearch={this.handleSearch}
        />

        <div className="mt-4">{this.getView()}</div>

        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <TodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
