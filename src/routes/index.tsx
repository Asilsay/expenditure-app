import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import ScrollToTop from '../components/ScrollToTop';

const Dashboard = lazy(() => import('../pages/home/Dashboard'));
const Review = lazy(() => import('../pages/review/Review'));
const Category = lazy(() => import('../pages/category/Category'));
const FormTest = lazy(() => import('../pages/FormTest'));

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading layout />}>
        <Routes>
          <Route
            path={'/review'}
            element={<Review />}
          />
          <Route
            path={'/category'}
            element={<Category />}
          />
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
