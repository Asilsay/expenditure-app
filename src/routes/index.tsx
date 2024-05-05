import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import ScrollToTop from '../components/ScrollToTop';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const FormTest = lazy(() => import('../pages/FormTest'));

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading layout />}>
        <Routes>
          <Route
            path={'/'}
            element={<Dashboard />}
          />
          <Route
            path={'/test'}
            element={<FormTest />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
