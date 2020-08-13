import React from "react";

const Register = () => {
  return (
    <div className='container'>
      <h1>Register</h1>
      <form>
        <div className='form-group'>
          <label for='username'>Username</label>
          <input type='text' name='username' className='form-control' />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input type='password' name='password' className='form-control' />
        </div>
        <div className='form-group'>
          <label for='name'>Name</label>
          <input type='text' name='name' className='form-control' />
        </div>
        <button className='btn btn-primary'>Register</button>
      </form>
    </div>
  );
};

export default Register;
