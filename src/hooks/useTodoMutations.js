import { useMutation, useQueryClient } from '@tanstack/react-query';

const toggleTodoRequest = async ({ id, completed }) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  return response.json();
};

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleTodo } = useMutation(toggleTodoRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  });

  return { toggleTodo };
};
