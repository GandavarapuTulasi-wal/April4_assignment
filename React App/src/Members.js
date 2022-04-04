import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Members() {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  let storageToken = localStorage.getItem('token');
  storageToken = storageToken.replaceAll('"', '');
  console.log(storageToken);
  useEffect(() => {
    axios
      .get('/users/getusers', {
        headers: {
          token: storageToken,
        },
      })
      .then((res) => setDetails(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card-container">
      <table id="products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>age</th>
            <th>Email</th>
            <th>Date of birth</th>
            <th>Edit </th>
          </tr>
        </thead>
        <tbody>
          {details.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>{val.dob}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => navigate(`/edit/${val.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Members;
