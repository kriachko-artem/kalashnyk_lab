import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/reset.css'
import './global/fonts.css'
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <BrowserRouter>
           <ScrollToTop/>
          <App />
        </BrowserRouter>
     </Provider>
  </React.StrictMode>
);
