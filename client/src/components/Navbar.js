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
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className='navbar-brand mx-auto order-0 ' to='/'>
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
      {auth ? (
        <>
          <div
            class='navbar-collapse collapse w-100 order-3 dual-collapse2'
            id='navbarNavAltMarkup'
          >
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <Link class='nav-link' to='/'>
                  Products
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='/cart'>
                  Cart
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='/userorder'>
                  Orders
                </Link>
              </li>
              <li class='nav-item'>
                <Link onClick={onLogoutClick} className='nav-item nav-link'>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            class='navbar-collapse collapse w-100 order-3 dual-collapse2'
            id='navbarNavAltMarkup'
          >
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <Link class='nav-link' to='/'>
                  Products
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
