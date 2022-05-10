
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';

function App() {


  return (
    <BrowserRouter>
    <Layout />
    </BrowserRouter>
  );
}

export default App;
