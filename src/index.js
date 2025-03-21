import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Navbar, NavbarMenu, Home, About, Skills, Footer} from './Main';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <Navbar />
    <NavbarMenu />
    <Home />
    <About />
    <Skills />
    <Footer />
  </React.StrictMode>
);