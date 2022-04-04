import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';
import Members from './Members';
import EditUser from './EditUser';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';
import { useEffect, useState } from 'react';

function App() {
  const [islogin, setLogin] = useState(0);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(1);
    } else {
      setLogin(0);
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div>
            <h1 className="heading">App</h1>
          </div>
          <div className="nav">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/register" className="link">
              Registartion
            </Link>
            {islogin ? (
              <Link to="/logout" className="link">
                logout
              </Link>
            ) : (
              <Link to="/login" className="link">
                login
              </Link>
            )}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration />}></Route>

          <Route path="/logout" element={<Logout />} />

          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/members" element={<Members />} />
          </Route>
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
