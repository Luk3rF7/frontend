import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './styles/global.css';

import { Home } from './pages/home/';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
