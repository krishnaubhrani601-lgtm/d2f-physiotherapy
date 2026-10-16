import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// 1. Bootstrap CSS Framework
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. D2F Design System Tokens
import './styles/variables.css';

// 3. Global Base Styles & Scroll Reveal Animations
import './styles/global.css';

// 4. Main Application Component
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
