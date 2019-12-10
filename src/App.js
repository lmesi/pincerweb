import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Orders from './Pages/Orders/Orders'
import Home from './Pages/Home/Home'
import Registration from './Pages/Registration/Registration'

import './App.css';

function App() {
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact >
          <Home setUser={setUser}/>
        </Route>
        <Route path="/login" exact >
          <Login setUser={setUser} />
        </Route>
        <Route path="/orders" exact >
          <Orders user={user} />
        </Route>
        <Route path="/registration" exact >
          <Registration setUser={setUser} />
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
