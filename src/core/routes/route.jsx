import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../config/App';

export const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};