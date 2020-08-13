import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className='navbar-brand' to='/products'>
        MERN
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link active' to='/products'>
            Products<span className='sr-only'>(current)</span>
          </Link>
          <Link className='nav-item nav-link' to='/login'>
            Login
          </Link>
          <Link className='nav-item nav-link' to='/register'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
