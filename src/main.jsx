import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import './styles/fonts.css'
import './styles/root.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/reset.css'
import './styles/costume.css'
import "./index.css";
import'./styles/media.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
