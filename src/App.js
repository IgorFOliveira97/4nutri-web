import './styles/global-styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route
            index={true}
            path="/"
            element={<Home />}
            errorElement={<ErrorPage />}
          />
          {/* <Route path="/user/:id" element={<User />} /> */}
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/registration" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foods" element={<></>} />
          <Route path="/foods/registration" element={<FoodsRegistration />} />
          <Route path="/foods/edit" element={<FoodsEdit />} />
          <Route path="/foods/" element={<Foods />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/patients/details/:id" element={<PatientDetails />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route
            path="/patients/registration"
            element={<PatientRegistration />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
