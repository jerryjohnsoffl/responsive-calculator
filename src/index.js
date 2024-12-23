import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=" bg-stone-900 h-screen flex justify-center">
      <App />
    </div>
  </React.StrictMode>
);
