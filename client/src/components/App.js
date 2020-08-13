import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home'
import Login from "./Login";
import Register from "./Register";

const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
