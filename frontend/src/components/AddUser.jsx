import React, { useState } from "react";

import UserService from "../services/UserService";

const AddUser = () => {
  const initialState = {
    id: null,
    name: "",
    age: 0,
    email: "",
    address: "",
    country: "",
    telephone: ""
  };
  const [user, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
	    title: user.name,
	    age: user.age,
		email: user.email,
		address: user.address,
		country: user.country,
		telephone: user.telephone     
    };

    UserService.create(data)
      .then(response => {
        setUser({
		    title: response.data.name,
		    age: response.data.age,
			email: response.data.email,
			address: response.data.address,
			country: response.data.country,
			telephone: response.data.telephone   
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Successfully created!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={user.age}
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
                value={user.email}
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
                value={user.address}
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
                value={user.country}
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
                value={user.telephone}
                onChange={handleInputChange}
              />
            </div>          

          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;