import React from 'react';
import UnconnectedRouter from './Routers/Unconnect.Router';
import { ThemeProvider } from '@emotion/react';
import theme from './assets/style';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <UnconnectedRouter />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
