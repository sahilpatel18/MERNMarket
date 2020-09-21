import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  let auth = useSelector((state) => state.auth.isAuthenticated);
  let dispatch = useDispatch();
  const history = useHistory();

  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    toast.error("Logged Out", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/login");
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className='navbar-brand' to='/'>
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
          {auth ? (
            <>
              <Link className='nav-item nav-link active' to='/'>
                Products<span className='sr-only'>(current)</span>
              </Link>
              <Link
                onClick={onLogoutClick}
                className='nav-item nav-link'
                to='/register'
              >
                Logout
              </Link>
              <Link className='nav-item nav-link' to='/cart'>
                Cart
              </Link>
              <Link className='nav-item nav-link' to='/userorder'>
                Orders
              </Link>
            </>
          ) : (
            <>
              <Link className='nav-item nav-link active' to='/'>
                Products<span className='sr-only'>(current)</span>
              </Link>
              <Link className='nav-item nav-link' to='/login'>
                Login
              </Link>
              <Link className='nav-item nav-link' to='/register'>
                Register
              </Link>
              <Link className='nav-item nav-link' to='/cart'>
                Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
