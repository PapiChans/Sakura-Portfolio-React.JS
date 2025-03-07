import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar} from './Main';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);