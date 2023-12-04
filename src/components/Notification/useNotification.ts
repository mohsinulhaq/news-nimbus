import {useDispatch} from 'react-redux';
import {
  showNotification as _showNotification,
  hideNotification as _hideNotification,
  NotificationState,
} from '../../slices/notificationSlice.ts';

export const useNotification = () => {
  const dispatch = useDispatch();

  const showNotification = (notification: NotificationState) => {
    dispatch(_showNotification(notification));
  };

  const hideNotification = () => {
    dispatch(_hideNotification());
  };

  return [showNotification, hideNotification] as const;
};
