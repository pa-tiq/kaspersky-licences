import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/MainHeader/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';
import LicenceContextProvider from './store/licence-context';

const Home = React.lazy(() => import('./components/Home/Home'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <main>
          <LicenceContextProvider>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </LicenceContextProvider>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
