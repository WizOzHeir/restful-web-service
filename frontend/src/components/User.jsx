import React, { useState, useEffect } from "react";

import UserService from "../services/UserService";


const User = props => {
  const initialState = {
    id: null,
    name: "",
    age: 0,
    email: "",
    address: "",
    country: "",
    telephone: ""
  };
  const [currentUser, setCurrentUser] = useState(initialState);
  const [message, setMessage] = useState("");

  const getUser = id => {
    UserService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateUser = () => {
    UserService.update(currentUser.id, currentUser)
      .then(response => {
        console.log(response.data);
        setMessage("User was successfully updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UserService.remove(currentUser.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/users");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={currentUser.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
              />
            </div>
             <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={currentUser.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={currentUser.country}
                onChange={handleInputChange}
              />
            </div>
             <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                name="telephone"
                value={currentUser.telephone}
                onChange={handleInputChange}
              />
            </div>          
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteUser}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Click on a User</p>
        </div>
      )}
    </div>
  );
};

export default User;