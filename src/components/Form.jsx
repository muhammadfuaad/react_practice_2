import React, { useState } from 'react';

const Form = () => {
  const [usersData, setUsersData] =useState([])
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
    console.log("userData:", userData);
    // setUsersData([...usersData, userData])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsersData([...usersData, userData])
    setUserData({
      name: '',
      email: '',
      password: ''
    });
    console.log('userData:', userData);
    console.log('usersData:', usersData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
