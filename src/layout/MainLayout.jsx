import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Loader } from 'components/Loader';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
