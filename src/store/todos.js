import {
  getTodosAPI,
  writeTodosAPI,
  deleteTodosAPI,
} from '../lib/api/todo';

const SET_TODOS = 'SET_TODO';
const SET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const SET_TODOS_ERROR = 'SET_TODOS_ERROR';

export const getTodos = () => async (dispatch) => {
  dispatch({ type: SET_TODOS });
  try {
    const { data } = await getTodosAPI();

    dispatch({ type: SET_TODOS_SUCCESS, todos: data });
  } catch (error) {
    dispatch({ type: SET_TODOS_ERROR, error });
  }
};
export const checkTodo = (todos, id) => async (dispatch) => {
  try {
    await writeTodosAPI(id);
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, checked: !todo.checked };
      return todo;
    });
    dispatch({ type: SET_TODOS_SUCCESS, todos: newTodos });
  } catch (error) {
    dispatch({ type: SET_TODOS_ERROR, error });
  }
};
export const deleteTodo = (todos, id) => async (dispatch) => {
  try {
    await deleteTodosAPI(id);
    const newTodos = todos.filter(todo => todo.id !== id);
    dispatch({ type: SET_TODOS_SUCCESS, todos: newTodos });
  } catch (error) {
    dispatch({ type: SET_TODOS_ERROR, error });
  }
};

const initialState = {
  isChanging: false,
  loading: false,
  todos: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        loading: true,
        todos: null,
        error: null,
      };
    case SET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
        error: null,
      };
    case SET_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
