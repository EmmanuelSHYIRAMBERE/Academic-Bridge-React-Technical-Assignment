import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTodos } from '../hooks/useTodos';
import TodoCard from './TodoCard';
import TodoFilters from './TodoFilters';
import TodoHeader from './TodoHeader';

const TodoList = () => {
  const { t } = useTranslation();
  const { todos, isLoading, error } = useTodos();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-600">{t('errors.loading')}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TodoHeader />
      <TodoFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
