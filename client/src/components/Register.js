import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/index";

const Register = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let auth = useSelector((state) => state.auth.isAuthenticated);

  const [user, setUser] = useState({
    username: "",
    password: "",
    errors: {},
  });

  useEffect(() => {
    if (auth) {
      history.push("/products");
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: user.username,
      password: user.password,
    };
    history.push("/login");
    dispatch(registerUser(userData));
  };

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className='container py-5'>
      <h1>Register</h1>
  
      <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label for='username'>Username</label>
          <input
            onChange={onChangeHandler}
            type='text'
            value={user.username}
            id='username'
            name='username'
            error={user.errors.username}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input
            onChange={onChangeHandler}
            type='password'
            value={user.password}
            error={user.errors.password}
            name='password'
            id='password'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
      <p className='grey-text text-darken-1'>
        Already have an account? <Link to='/login'>Log in</Link>
      </p>
    </div>
  );
};

export default Register
