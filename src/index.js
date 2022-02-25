import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UploadSong from "./components/UploadSong"

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/upload" element={<UploadSong/>}/>
  </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);


reportWebVitals();
