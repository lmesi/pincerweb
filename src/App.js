import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Orders from './Pages/Orders/Orders'
import Registration from './Pages/Registration/Registration'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/registration" exact component={Registration} />
    </BrowserRouter>
  );
}

export default App;
