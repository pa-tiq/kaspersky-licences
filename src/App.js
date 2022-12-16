import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/MainHeader/Layout';
import LicenceProvider from './store/LicenceProvider';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

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
          <LicenceProvider>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </LicenceProvider>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
