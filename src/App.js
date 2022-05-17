
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';
// import axiosInstance from './service/AxiosInstance';
import httpReq from './services/http.service';

function App() {

  useEffect(() => {

    httpReq.get('allproducts')
      .then(res => console.log(res))


  }, [])


  return (
    <BrowserRouter>
      <div className='bg-white'>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
