import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTodoFilters } from '../hooks/useTodoFilters';

const TodoFilters = () => {
  const { t } = useTranslation();
  const { filters, setFilter } = useTodoFilters();

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${
            filters === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
      >
        {t('filters.all')}
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${
            filters === 'active'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
      >
        {t('filters.active')}
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${
            filters === 'completed'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
      >
        {t('filters.completed')}
      </button>
    </div>
  );
};

export default TodoFilters;
