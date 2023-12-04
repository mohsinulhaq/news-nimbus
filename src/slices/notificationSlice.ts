import {SnackbarProps} from '@mui/joy/Snackbar';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface NotificationState {
  open: boolean;
  color?: SnackbarProps['color'];
  message?: string;
  timeout?: number | null;
}

export const notificationInitialState: NotificationState = {
  open: false,
  message: '',
  timeout: 5000,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: {
    showNotification: (
      _state,
      action: PayloadAction<Omit<NotificationState, 'open'>>
    ) => ({
      ...notificationInitialState,
      color: 'neutral',
      ...action.payload,
      open: true,
    }),
    hideNotification: (state) => ({...state, ...notificationInitialState}),
  },
});

export const {showNotification, hideNotification} = notificationSlice.actions;
