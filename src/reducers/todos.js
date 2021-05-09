import {
  getTodosAPI,
  writeTodosAPI,
  deleteTodosAPI,
} from '../lib/api/todo';

const FETCH_TODOS = 'FETCH_TODO';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const CHECK_TODO_SUCCESS = 'CHECK_TODO_SUCCESS';
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const getTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_TODOS });
  try {
    const { data } = await getTodosAPI();

    dispatch({ type: GET_TODOS_SUCCESS, todos: data });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_ERROR, error });
  }
};
export const checkTodo = (todos, id) => async (dispatch) => {
  try {
    await writeTodosAPI(id);
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, checked: !todo.checked };
      return todo;
    });
    dispatch({ type: CHECK_TODO_SUCCESS, todos: newTodos });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_ERROR, error });
  }
};
export const deleteTodo = (todos, id) => async (dispatch) => {
  try {
    await deleteTodosAPI(id);
    const newTodos = todos.filter(todo => todo.id !== id);
    dispatch({ type: DELETE_TODO_SUCCESS, todos: newTodos });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_ERROR, error });
  }
};

const initialState = {
  isChanging: false,
  loading: false,
  todos: null,
  error: null,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: true,
        todos: null,
        error: null,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
        error: null,
      };
    case CHECK_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
        error: null,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
        error: null,
      };
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default todos;
