import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CaptureStream from "./component/CaptureStream"; 
import App from './App.jsx';
import { StreamTheme } from "@stream-io/video-react-sdk";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StreamTheme style={{ fontFamily: "sans-serif", color: "white" }}>
    <Router>
      <Routes>
      <Route path="/capture" element={<CaptureStream />} />
      <Route path="/" element={<App />} />
      </Routes>
    </Router>
    </StreamTheme>
  </StrictMode>,
)
