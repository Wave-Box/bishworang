
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './hooks/AuthProvider';

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <div className='bg-white'>
          <Layout />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
