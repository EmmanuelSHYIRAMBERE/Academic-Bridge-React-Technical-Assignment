import { useQuery } from '@tanstack/react-query';
import { useTodoContext } from '../context/TodoContext';

const fetchTodos = async () => {
  const response = await fetch('https://dummyjson.com/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  const data = await response.json();
  return data.todos;
};

export const useTodos = () => {
  const { state } = useTodoContext();
  const { data: todos = [], isLoading, error } = useQuery(['todos'], fetchTodos);

  const filteredTodos = todos.filter((todo) => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return { todos: filteredTodos, isLoading, error };
};
