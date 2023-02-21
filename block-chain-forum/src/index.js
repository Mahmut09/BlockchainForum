import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header_tail from './components/header/Header_tail'
import Header from './components/header/Header'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header_tail />
    <Header />
  </React.StrictMode>
);
reportWebVitals();
