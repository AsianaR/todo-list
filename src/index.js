import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store.js";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;  
    text-decoration: none;
    list-style:none;
  }
  body{
    background: linear-gradient(to right, #EC6EAD, #3494E6);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
