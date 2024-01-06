import React from 'react';
import UnconnectedRouter from './Routers/Unconnect.Router';
import { ThemeProvider } from '@emotion/react';
import theme from './assets/style';
import AdminRouter from './Routers/Admin.Router';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {
          (localStorage.getItem('token')) ?
            (localStorage.getItem('admin') === 'true') ?
              <AdminRouter />
              :
              <div>
                <button onClick={() => localStorage.removeItem('token')}>Log Out</button>
              </div>
            :
            <UnconnectedRouter />
        }
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
