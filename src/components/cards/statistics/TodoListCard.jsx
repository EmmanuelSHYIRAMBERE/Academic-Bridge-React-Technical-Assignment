import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

const TodoListCard = ({ todo = {}, onTodoToggle }) => {
  const handleTodoToggle = () => {
    if (onTodoToggle) {
      onTodoToggle(todo.id);
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[3]
        }
      }}
    >
      <Stack spacing={2}>
        <Box display="flex" alignItems="flex-start">
          <Checkbox edge="start" checked={todo.completed} onChange={handleTodoToggle} sx={{ mt: -0.5, mr: 1 }} />
          <Typography
            variant="body1"
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.secondary' : 'text.primary'
            }}
          >
            {todo.todo}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          User ID: {todo.userId}
        </Typography>
      </Stack>
    </Paper>
  );
};

TodoListCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    todo: PropTypes.string,
    completed: PropTypes.bool,
    userId: PropTypes.number
  }),
  onTodoToggle: PropTypes.func
};

export default TodoListCard;
