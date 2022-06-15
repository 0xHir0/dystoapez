import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DAppProvider } from '@usedapp/core';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../pages/home'));
const MintPage = lazy(() => import('../pages/mint'));
const ScrapPage = lazy(() => import('../pages/scrap'));
const ErrorPage = lazy(() => import('../pages/error'));

const AppRoutes = () => {
  return (
    <DAppProvider config={{}}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mint' element={<MintPage />} />
        <Route path='/scrap' element={<ScrapPage />} />
        <Route component={ErrorPage} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={'colored'}
        pauseOnHover={false}
        rtl={false}
      />
    </DAppProvider>
  );
};

export default AppRoutes;
