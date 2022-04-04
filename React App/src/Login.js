import axios from 'axios';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
function Login() {
  const [status, setStatus] = useState(0);
  const [token, setToken] = useLocalStorage('token', '');
  const login = (event) => {
    event.preventDefault();
    let userObject = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post('/users/login', userObject)
      .then((res) => {
        console.log(res.data);
        setStatus(res.data.status);
        setToken(res.data.token);

        if (localStorage.getItem('token')) {
          window.location.pathname = '/members';
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus(error.status);
      });
  };
  return (
    <div>
      <div className="card-container">
        <h1>Login Form</h1>
        <form onSubmit={login} className="box">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="todo-user-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="todo-user-input"
          />

          <button>Login</button>
          {status ? <p>User login Succesfull</p> : ''}
        </form>
      </div>
    </div>
  );
}
export default Login;
