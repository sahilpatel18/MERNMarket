import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home'
import Login from "./Login";
import Register from "./Register";
import productDetails from "./productDetails";
import Cart from './Cart';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/products' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path={`/products/:id`} component={productDetails} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
