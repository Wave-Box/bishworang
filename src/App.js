
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';

function App() {


  return (
    <BrowserRouter>
    <div  className='bg-white'>
    <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
