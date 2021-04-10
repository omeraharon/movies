import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
