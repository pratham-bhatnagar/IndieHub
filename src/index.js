import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadSong from "./components/UploadSong";
import Parallax from "./components/parallax";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/upload" element={<UploadSong />} />
      <Route path="/p" element={<Parallax />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();
