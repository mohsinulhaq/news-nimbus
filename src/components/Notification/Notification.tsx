import {Snackbar} from '@mui/joy';
import {memo} from 'react';
import {useSelector} from 'react-redux';
import {useNotification} from './useNotification.ts';
import {RootState} from '../../store.ts';

export const Notification = memo(() => {
  const notification = useSelector((state: RootState) => state.notification);
  const [, hideNotification] = useNotification();

  const handleClose = (_: unknown, reason?: string) =>
    reason !== 'clickaway' && hideNotification();

  return (
    <Snackbar
      variant="soft"
      color={notification.color}
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      sx={{minWidth: 300, maxWidth: 300}}
    >
      {notification.message}
    </Snackbar>
  );
});
