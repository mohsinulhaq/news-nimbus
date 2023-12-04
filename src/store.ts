import {configureStore, isRejectedWithValue} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import type {MiddlewareAPI, Middleware} from '@reduxjs/toolkit';
import {newsApiService} from './services/newsApi/newsApiService';
import {guardianService} from './services/guardian/guardianService';
import {nytimesService} from './services/nytimes/nytimesService';
import {notificationSlice} from './slices/notificationSlice';
import {metaSlice} from './slices/metaSlice';

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log('Redux action rejected: ', action);
      api.dispatch(
        notificationSlice.actions.showNotification({
          color: 'danger',
          message:
            // news-api
            action.payload?.data?.message ||
            // nytimes
            action.payload?.data?.fault?.faultstring ||
            // guardian
            action.payload?.data?.response?.statusText ||
            // generic
            action.payload.error,
        })
      );
    }

    return next(action);
  };

export const store = configureStore({
  reducer: {
    [notificationSlice.name]: notificationSlice.reducer,
    [newsApiService.reducerPath]: newsApiService.reducer,
    [guardianService.reducerPath]: guardianService.reducer,
    [nytimesService.reducerPath]: nytimesService.reducer,
    [metaSlice.name]: metaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rtkQueryErrorLogger,
      newsApiService.middleware,
      guardianService.middleware,
      nytimesService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
