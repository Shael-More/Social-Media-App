import Home from './pages/Home';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/Register';
import Test from './Test/Test';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <ProfilePage /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Test /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile/:username' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
