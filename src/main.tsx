import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import {CssVarsProvider} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {Analytics} from '@vercel/analytics/react';

import {store} from './store.ts';
import {App} from './App.tsx';
import {Notification} from './components/Notification/Notification.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
        <App />
        <Notification />
      </CssVarsProvider>
    </ReduxProvider>
    <Analytics />
  </StrictMode>
);
