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
    <div className="container py-5">
      <h1>Login</h1>
      <form>
        <div class='form-group'>
          <label for='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            class='form-control'
            value=''
          />
        </div>
        <div class='form-group'>
          <label for='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            class='form-control'
            value=''
          />
        </div>
        <button disabled='' class='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
