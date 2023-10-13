import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistration from './pages/UserRegistration';
import ErrorPage from './pages/ErrorPage';
import './styles/global-styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index={true}
            path="/"
            element={<></>}
            errorElement={<ErrorPage />}
          />
          <Route path="/user" element={<></>} />
          <Route path="/user/registration" element={<UserRegistration />} />
          <Route path="/login" element={<></>} />
          <Route path="/foods" element={<></>} />
          <Route path="/patients" element={<></>} />
          <Route path="/patients/details" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
