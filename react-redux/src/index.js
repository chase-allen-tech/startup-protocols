import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import { AsterControllerProvider } from './context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Sample from './pages/Sample';
import SampleOther from './pages/SampleOther';
import Page404 from './pages/Page404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AsterControllerProvider>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path="/" exact element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="sample">
            <Route index element={<Sample />} />
            <Route path="other" element={<SampleOther />} />
            <Route path=":sampleId" element={<Sample />} />
          </Route>

        </Routes>
      </AsterControllerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
