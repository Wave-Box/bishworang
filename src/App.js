
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <BrowserRouter>
      <div className='bg-white'>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
