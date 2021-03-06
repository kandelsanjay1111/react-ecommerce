import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {ProductProvider} from './ProductContext';
ReactDOM.render(
  <ProductProvider>
  <Router>
  <App/>
  </Router>
  </ProductProvider>,
  document.getElementById('root')
);

