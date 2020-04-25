import { v4 as uuidv4 } from 'uuid';

const TODO_CHANGE = 'TODO_CHANGE';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
const TOGGLE_THEME = 'TOGGLE_THEME';
const REMOVE_TODO = 'REMOVE_TODO';
const ALL_DONE = 'ALL_DONE';
const REMOVE_ALL = 'REMOVE_ALL';

export const actions = {
  todoChange(payload) {
    return {
      type: TODO_CHANGE,
      payload,
    };
  },
  addTodo(payload) {
    return {
      type: ADD_TODO,
      payload,
    };
  },
  toggleTodoDone(payload) {
    return {
      type: TOGGLE_TODO_DONE,
      payload,
    };
  },
  toggleTheme() {
    return {
      type: TOGGLE_THEME,
    };
  },
  removeTodo(payload) {
    return {
      type: REMOVE_TODO,
      payload,
    };
  },
  allDone() {
    return {
      type: ALL_DONE,
    };
  },
  removeAll() {
    return {
      type: REMOVE_ALL,
    };
  },
};

const initialState = {
  message: 'Todo App',
  theme: 'light',
  newTodo: '',
  todos: [
    { value: 'eslam', done: true, id: 1 },
    { value: 'eslam', done: false, id: 2 },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_CHANGE: {
      return { ...state, newTodo: action.payload };
    }
    case ADD_TODO: {
      const newTodo = {
        value: action.payload,
        done: false,
        id: uuidv4(),
      };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case TOGGLE_TODO_DONE: {
      const todos = state.todos;
      const newTodos = todos.map((todo) => {
        if (todo.id === action.payload) todo.done = !todo.done;
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case REMOVE_TODO: {
      const todos = state.todos;
      const newTodos = todos.filter((todo) => todo.id != action.payload);
      return { ...state, todos: newTodos };
    }
    case ALL_DONE: {
      const todos = state.todos;
      const newTodos = todos.map((todo) => {
        todo.done = true;
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case REMOVE_ALL: {
      return { ...state, todos: [] };
    }
    default:
      return state;
  }
}
