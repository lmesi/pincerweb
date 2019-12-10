import React from 'react'
import { withRouter } from 'react-router-dom'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import './Home.css'

const Home = (props) => {

  return (
    <div className="Home">
      <Login setUser={props.setUser}/>
      <Registration setUser={props.setUser}/>
    </div>
  )
}


export default withRouter(Home)
