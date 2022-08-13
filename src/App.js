
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './views/pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './hooks/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Helmet } from "react-helmet";
const queryClient = new QueryClient()

function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Bishworang</title>
            <link rel="icon" href="./assets/favicon.ico" />
          </Helmet>
          <div className='bg-white'>
            <Layout />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
