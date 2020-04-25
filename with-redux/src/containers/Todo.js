import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import Header from '../components/Header';
import Form from '../components/Form';
import List from '../components/List';

class Todo extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Header message={this.props.message} />
        <Form
          newTodo={this.props.newTodo}
          onTodoChange={this.props.onTodoChange}
          onSubmit={this.props.onSubmit}
        />
        <List
          todos={this.props.todos}
          onTodoDoneToggle={this.props.onTodoDoneToggle}
          onRemoveTodo={this.props.onRemoveTodo}
          onAllDone={this.props.onAllDone}
          onRemoveAll={this.props.onRemoveAll}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoChange(newTodo) {
      dispatch(actions.todoChange(newTodo));
    },
    onSubmit(newTodo) {
      dispatch(actions.addTodo(newTodo));
    },
    onTodoDoneToggle(id) {
      dispatch(actions.toggleTodoDone(id));
    },
    onRemoveTodo(id) {
      dispatch(actions.removeTodo(id));
    },
    onAllDone() {
      dispatch(actions.allDone());
    },
    onRemoveAll() {
      dispatch(actions.removeAll());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
