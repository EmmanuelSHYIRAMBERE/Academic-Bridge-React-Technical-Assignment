import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import TodoListCard from 'components/cards/statistics/TodoListCard';

export default function TodoListContainer() {
  const [todosData, setTodosData] = useState({
    todos: [],
    total: 0,
    skip: 0,
    limit: 12
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async (skip = 0) => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/todos?limit=${todosData.limit}&skip=${skip}`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      const data = await response.json();
      setTodosData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handlePageChange = (event, page) => {
    fetchTodos((page - 1) * todosData.limit);
  };

  const handleTodoToggle = async (todoId) => {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: !todosData.todos.find((todo) => todo.id === todoId)?.completed
        })
      });

      if (!response.ok) throw new Error('Failed to update todo');

      setTodosData((prev) => ({
        ...prev,
        todos: prev.todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
      }));
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  // Calculate completion percentage
  const completedCount = todosData.todos.filter((todo) => todo.completed).length;
  const completionRate = todosData.todos.length > 0 ? (completedCount / todosData.todos.length) * 100 : 0;

  if (loading) {
    return (
      <Box sx={{ width: '100%', mt: 2 }}>
        <LinearProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Todo List
        </Typography>
        <Box sx={{ mt: 2, mb: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Completion Rate: {completionRate.toFixed(1)}%
          </Typography>
          <LinearProgress variant="determinate" value={completionRate} sx={{ height: 8, borderRadius: 1 }} />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {todosData.todos.map((todo) => (
          <Grid key={todo.id} item xs={12} sm={6} md={4} lg={3}>
            <TodoListCard todo={todo} onTodoToggle={handleTodoToggle} />
          </Grid>
        ))}
      </Grid>

      {todosData.total > todosData.limit && (
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination
            count={Math.ceil(todosData.total / todosData.limit)}
            page={Math.floor(todosData.skip / todosData.limit) + 1}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Box>
  );
}
