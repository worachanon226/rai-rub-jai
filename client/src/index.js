import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './UserContext';
import { CookiesProvider } from 'react-cookie';
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();
