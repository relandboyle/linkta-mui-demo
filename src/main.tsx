import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3d8590',
      main: '#23616a',
      dark: '#01383f',
      contrastText: '#ffca7c',
    },
    secondary: {
      light: '#ffca7c',
      main: '#ffa41b',
      dark: '#fb8800',
      contrastText: '#01383f',
    },
    text: {
      primary: '#3d8590',
      secondary: '#fb8800'
    },
    background: {
      paper: '#eeeeee',
      default: '#01383f'
    }
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
