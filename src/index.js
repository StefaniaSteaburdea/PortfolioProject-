import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetails from './scenes/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/projects/:id' element={<ProjectDetails/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
