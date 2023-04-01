import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import './assets/css/slicknav.min.css';
import './assets/css//nice-select.css';
import './assets/css/elegant-icons.css';
import './assets/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
