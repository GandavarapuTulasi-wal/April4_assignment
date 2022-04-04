import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EditUser = () => {
  const [status, setStatus] = useState();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState('');
  let [age, setAge] = useState();
  let [dob, setDOB] = useState();
  const urlParams = useParams();
  let id = urlParams.id;
  let storedToken = localStorage.getItem('token');
  storedToken = storedToken.replaceAll('"', '');
  useEffect(() => {
    axios
      .get(`/users/${urlParams.id}`, {
        headers: {
          token: storedToken,
        },
      })
      .then((res) => {
        console.log(res.data.name);
        setName(res.data[0].name);
        setEmail(res.data[0].email);
        setPassword(res.data[0].password);
        setAge(res.data[0].age);
        setDOB(res.data[0].dob);
      })
      .catch((error) => console.log(error));
  }, []);
  const editData = (event) => {
    event.preventDefault();
    let object = { name, email, password, age, dob };
    axios
      .put(`/users/edit/${id}`, object)
      .then((res) => setStatus('Edited Successfully'))
      .catch((event) => console.log(event));
  };
  return (
    <div className="card-container">
      <form className="form" onSubmit={editData} className="box">
        <input
          type="text"
          className="todo-user-input"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="email"
          className="todo-user-input"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          className="todo-user-input"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="number"
          name="age"
          className="todo-user-input"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          required
          type="date"
          className="todo-user-input"
          name="dob"
          value={dob}
          onChange={(event) => setDOB(event.target.value)}
        />
        <div>
          <button>Save</button>
        </div>
      </form>
      <p>{status}</p>
    </div>
  );
};
export default EditUser;
