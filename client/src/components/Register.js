import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState("");

  const postRegisteredUser = async () => {
    const response = await axios.post("/api/register", user);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log(response);
  };

  return (
    <div className='container py-5'>
      <h1>Register</h1>
      <form onSubmit={postRegisteredUser}>
        <div className='form-group'>
          <label for='username'>Username</label>
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type='text'
            name='username'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type='password'
            name='password'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
