/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DotsHorizontal, Message, User, Check } from 'lucide-react';
import { useTodoMutations } from '../hooks/useTodoMutations';

const TodoCard = ({ todo }) => {
  const { t } = useTranslation();
  const { toggleTodo } = useTodoMutations();

  const handleTodoToggle = () => {
    toggleTodo({ id: todo.id, completed: !todo.completed });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTodoToggle();
      event.preventDefault();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <button
            onClick={handleTodoToggle}
            onKeyPress={handleKeyPress}
            role="checkbox"
            aria-checked={todo.completed}
            tabIndex={0}
            className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center
              ${todo.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-300 hover:border-blue-500'}`}
          >
            {todo.completed && <Check size={14} className="text-white" />}
          </button>
          <div className="flex-1">
            <p className={`text-sm font-medium dark:text-gray-200 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
              {todo.todo}
            </p>
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label={t('buttons.more_options')}
        >
          <DotsHorizontal size={20} />
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center" aria-hidden="true">
            <User size={14} className="text-gray-600 dark:text-gray-400" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {t('user')} {todo.userId}
          </span>
        </div>

        <div className="flex items-center gap-1" role="status" aria-label={t('messages.count', { count: 2 })}>
          <Message size={14} className="text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-400">2</span>
        </div>
      </div>

      <div className="mt-3">
        <span
          className="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium"
          role="status"
        >
          {t('status.in_progress')}
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
