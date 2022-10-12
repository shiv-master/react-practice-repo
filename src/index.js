import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./components/context/Auth";
import { Provider } from "react-redux";
import Store from './store/Store'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={Store}>
      <App />
      </Provider>
    </AuthProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
