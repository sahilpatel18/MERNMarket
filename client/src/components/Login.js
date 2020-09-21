import React, { useState,useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loginUser} from '../actions/index'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let history =  useHistory()
  let dispatch = useDispatch()
  let auth = useSelector((state) => state.auth.isAuthenticated)
  const [user, setUser] = useState({
    username: "",
    password: "",
    errors: {},
  });

  useEffect(() => {
    if(auth){
      history.push('/')
      toast.success('Logged In', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }, [auth])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: user.username,
      password: user.password,
    };
    dispatch(loginUser(userData))
  };

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  
  return (
    <div className='container py-5'>
      <h1>Login</h1>
      <form noValidate onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label for='username'>Username</label>
          <input
            onChange={onChangeHandler}
            value={user.username}
            type='text'
            name='username'
            id='username'
            error={user.errors.username}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input
            onChange={onChangeHandler}
            value={user.password}
            error={user.errors.password}
            type='password'
            id='password'
            name='password'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
      <p className='grey-text text-darken-1'>
        Dont have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;
