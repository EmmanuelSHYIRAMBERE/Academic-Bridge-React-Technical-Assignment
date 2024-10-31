import { useTodoContext } from '../context/TodoContext';

export const useTodoFilters = () => {
  const { state, dispatch } = useTodoContext();

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return { filters: state.filter, setFilter };
};
