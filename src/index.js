import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Toast
import { Toaster } from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Toaster />
      <App />
    </React.StrictMode>
  </HashRouter>
);
