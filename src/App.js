import './styles/global-styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistration from './pages/UserRegistration';
import UserLogin from './pages/UserLogin';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import User from './pages/User';
import { ToastContainer, toast } from 'react-toastify';

function App() {
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
          <Route path="/user" element={<User />} />
          <Route path="/user/registration" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/foods" element={<></>} />
          <Route path="/patients" element={<></>} />
          <Route path="/patients/details" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
