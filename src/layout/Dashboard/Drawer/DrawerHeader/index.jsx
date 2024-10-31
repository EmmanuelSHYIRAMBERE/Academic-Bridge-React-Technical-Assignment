import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  return <DrawerHeaderStyled theme={theme} open={!!open} />;
}

DrawerHeader.propTypes = { open: PropTypes.bool };
