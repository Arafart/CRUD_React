import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState([]);

  async function fetchData() {
    await axios.get("http://localhost:8080/users").then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    fetchData();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((val, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/users/${val.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/users/edit/${val.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger mr-2"
                      to="#"
                      onClick={() => deleteUser(val.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
