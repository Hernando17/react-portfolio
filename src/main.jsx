import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";
import Routers from './routers';
import "./assets/scss/styles.scss";
import "./assets/scss/components.scss";
import "./assets/scss/utils.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>,
)
