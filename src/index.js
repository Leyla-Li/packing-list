import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';
import ItemProvider from './context';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ItemProvider>
      <Application />
    </ItemProvider>
  </React.StrictMode>,
);
