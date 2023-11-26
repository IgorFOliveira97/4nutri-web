import './styles/global-styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import User from './pages/User';
import Schedule from './pages/Schedule';
import { ToastContainer } from 'react-toastify';

import Patients from './pages/Patients';
import PatientRegistration from './pages/PatientRegistration';
import PatientDetails from './pages/PatientDetails';
import PaymentPage from './pages/PaymentPage';
import FoodsRegistration from './pages/FoodsRegistration';
import Foods from './pages/Foods';
import FoodsEdit from './pages/FoodsEdit';
import axios from 'axios';
import { AuthProvider, Context } from './Context/AuthProvider';
import { useContext } from 'react';

function PrivateRoute({ children }) {
  const { loading, authenticated, userData } = useContext(Context);
  console.log('User data', userData);
  if (loading) {
    return <h1>Carregando</h1>;
  }
  if (!authenticated || !userData) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  axios.defaults.baseURL = 'http://localhost:3001/';
  return (
    <div className="App">
      <ToastContainer position="top-right" />{' '}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              index={true}
              path="/"
              element={<Home />}
              errorElement={<ErrorPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/user/registration" element={<UserRegistration />} />
            <Route
              path="/user/:id"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
            <Route
              path="/foods/registration"
              element={
                <PrivateRoute>
                  <FoodsRegistration />
                </PrivateRoute>
              }
            />
            <Route
              path="/foods/edit/:id"
              element={
                <PrivateRoute>
                  <FoodsEdit />
                </PrivateRoute>
              }
            />
            <Route
              path="/foods/"
              element={
                <PrivateRoute>
                  <Foods />
                </PrivateRoute>
              }
            />
            <Route
              path="/patients"
              element={
                <PrivateRoute>
                  <Patients />
                </PrivateRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <PrivateRoute>
                  <Schedule />
                </PrivateRoute>
              }
            />
            <Route
              path="/patients/details/:id"
              element={
                <PrivateRoute>
                  <PatientDetails />
                </PrivateRoute>
              }
            />
            <Route path="/PaymentPage" element={<PaymentPage />} />
            <Route
              path="/patients/registration"
              element={
                <PrivateRoute>
                  <PatientRegistration />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
