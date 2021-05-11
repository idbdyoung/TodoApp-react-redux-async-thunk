import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import TodoList from '../components/TodoList';
import {
  getTodos,
  deleteTodo,
  checkTodo,
} from '../store/todos';

const TodoListContainer = () => {
  const { todos, loading, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCheck = (todos, id) => {
    dispatch(checkTodo(todos, id));
  };
  const onDelete = (todos, id) => dispatch(deleteTodo(todos, id));

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return '로딩중';
  if (error) console.log(error);
  if (!todos) return null;
  return (
    <TodoList
      todos={todos}
      onCheck={onCheck}
      onDelete={onDelete}
    />
  );
};

export default TodoListContainer;
