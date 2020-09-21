import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import productDetails from "./productDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "../actions/index";
import { useDispatch } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import Success from "./Success";
import UserOrders from "./UserOrders";

const App = () => {
  let auth = useSelector((state) => state.auth.isAuthenticated);
  let dispatch = useDispatch();
  const history = useHistory();
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      dispatch(logoutUser());
      history.push("/login");
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path={`/products/:id`} component={productDetails} />
            <Route
              path='/cart'
              render={() => (auth ? <Cart /> : <Redirect to='/login' />)}
            />
            <Route path='/paynow' component={Checkout} />
            <Route path='/order' component={Success} />
            <Route path='/userorder' component={UserOrders} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
