import axios from 'axios';
import { useState } from 'react';

function Registration() {
  const [status, setStatus] = useState();
  const addUser = (event) => {
    event.preventDefault();
    let userObject = {
      name: event.target.name.value,
      password: event.target.password.value,
      age: event.target.age.value,
      dob: event.target.dob.value,
      email: event.target.email.value,
    };
    axios
      .post('/users', userObject)
      .then((res) => {
        console.log(res.data);
        setStatus(res.data.status);
      })
      .catch((error) => {
        console.log(error);
        setStatus(error.status);
      });
  };

  return (
    <div className="card-container">
      <h1>Registartion Form</h1>
      <form onSubmit={addUser} className="box">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="todo-user-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="todo-user-input"
        />
        <input
          type="age"
          name="age"
          placeholder="Enter age"
          className="todo-user-input"
        />
        <input
          type="date"
          name="dob"
          placeholder="Enter DOB"
          className="todo-user-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="todo-user-input"
        />

        <button>Register</button>
      </form>
      {status ? <p>User Registered Succesfull</p> : ''}
    </div>
  );
}
export default Registration;
