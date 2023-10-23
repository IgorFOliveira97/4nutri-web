import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistration from './pages/UserRegistration';
import PatientRegistration from './pages/PatientRegistration';
import UserLogin from './pages/UserLogin';
import ErrorPage from './pages/ErrorPage';
import './styles/global-styles.css';
// import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index={true}
            path="/"
            element={<PatientRegistration />}
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
