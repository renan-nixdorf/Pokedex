import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalContext } from './Context/index.jsx';
import Global from './styles/global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <Global />
      <App />
    </GlobalContext>
  </React.StrictMode>,
);
