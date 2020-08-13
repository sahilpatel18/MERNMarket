import React from "react";

const Login = () => {
  return (
    // <div className='container'>
    //   <form >
    //     <div className='form-group'>
    //       <label>Username</label>
    //       <input
    //         type='text'
    //         className='form-control'
    //         placeholder='Enter Username'
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <label for='exampleInputPassword1'>Password</label>
    //       <input
    //         type='password'
    //         className='form-control'
    //         placeholder='Password'
    //       />
    //     </div>
    //     <button type='submit' className='btn btn-primary'>
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className='container py-5'>
      <h1>Login</h1>
      <form>
        <div className='form-group'>
          <label for='username'>Username</label>
          <input type='text' name='username' className='form-control' />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input type='password' name='password' className='form-control' />
        </div>
        <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
};

export default Login;
