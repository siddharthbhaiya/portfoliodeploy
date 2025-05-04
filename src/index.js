import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import SlidingPhoto from './Sliding/SlidingPhoto';
import PortfolioShowcase from './Portfolio/PortfolioShowcase';
import Footer from './Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <SlidingPhoto/>
    <PortfolioShowcase/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
