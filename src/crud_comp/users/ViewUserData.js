import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewUserData() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    website: "",
  });

  const viewUser = async () => {
    await axios
      .get(`http://localhost:8080/users/${id}`)
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    viewUser();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="btn btn-primary mt-3">
        Back TO Home
      </Link>
      <h3 className="display-4">User Details</h3>
      <hr />
      <ul className="list-group">
        <li className="list-group-item list-group-item-warning">
          Name: {user.name}
        </li>

        <li className="list-group-item list-group-item-primary">
          Phone: {user.phone}
        </li>
        <li className="list-group-item list-group-item-secondary">
          Email: {user.email}
        </li>
        <li className="list-group-item list-group-item-success">Address</li>
        <li className="list-group-item list-group-item-danger">
          <div style={{ marginLeft: "1rem" }}>
            City/State: {user.address.city}
          </div>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <div style={{ marginLeft: "1rem" }}>
            Street: {user.address.street}
          </div>
        </li>
        <li className="list-group-item list-group-item-warning">
          <div style={{ marginLeft: "1rem" }}>
            Zipcode: {user.address.zipcode}
          </div>
        </li>
        <li className="list-group-item list-group-item-info">
          Website: {user.website}
        </li>
      </ul>
    </div>
  );
}

export default ViewUserData;
