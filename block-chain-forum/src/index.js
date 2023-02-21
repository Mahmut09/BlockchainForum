import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header_tail from './components/header/Header_tail'
import Header from './components/header/Header'
import PostForm from './components/post-form/PostForm'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Header_tail /> */}
        <Header />
        <PostForm />
    </React.StrictMode>
);
reportWebVitals();
