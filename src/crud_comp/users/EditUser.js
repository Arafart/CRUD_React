import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  let history = useHistory();
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

  const onInputChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [e.target.name]: e.target.value,
      },
    }));
    // console.log("hello", user.address.street);
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    console.log("loaduser", result);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      {console.log("hello", user)}
      <form>
        <div className="mb-3 mt-5 ">
          <div className="mb-3">
            <label for="name" className="form-label">
              FullName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              value={user.name}
              name="name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="Phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="Phone"
              name="phone"
              placeholder="Enter your Mobile Number"
              value={user.phone}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter your Email address"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            placeholder="Street"
            onChange={(e) => {
              onInputChange(e);
            }}
            style={{ marginBottom: "0.5rem" }}
          />
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            onChange={(e) => {
              onInputChange(e);
            }}
            style={{ marginBottom: "0.5rem" }}
          />
          <input
            type="number"
            className="form-control"
            id="zipcode"
            name="zipcode"
            onChange={(e) => {
              onInputChange(e);
            }}
            placeholder="Zipcode"
          />
        </div>
        <div className="mb-3">
          <label for="website" className="form-label">
            Website
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            placeholder="Enter your website URL (Optional)"
            value={user.website}
            onChange={(e) => {
              setUser({ ...user, website: e.target.value });
            }}
          />
        </div>

        <button type="submit" className="btn btn-warning" onClick={onSubmit}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
