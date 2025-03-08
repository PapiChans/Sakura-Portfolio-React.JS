import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar, Home, About} from './Main';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
  </React.StrictMode>
);