import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { MainLayout } from 'layout/MainLayout';
// import { Homepage } from 'pages/Homepage';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import {
  getIsRefreshing,
  getIsError,
  getErrorMessage,
} from 'redux/auth/auth-selectors';
import { Loader } from './Loader';
import { ToastContainer } from 'react-toastify';
import { useNotify } from 'hooks/useNotify';

const Homepage = lazy(() => import('pages/Homepage'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const isError = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);
  const { showFailure } = useNotify();

  useEffect(() => {
    if (isError) {
      showFailure(errorMessage);
    }
  }, [errorMessage, isError, showFailure]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PublicRoute component={<Homepage />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
          />

          <Route
            path="/login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute
                component={<Registration />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
