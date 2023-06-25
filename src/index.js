import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Style
import { GlobalStyle } from './globalStyle';
import { Reset } from 'styled-reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
