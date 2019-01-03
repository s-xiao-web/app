import React from 'react'
import { BrowserRouter as Router,HashRouter, Route, Switch,  } from 'react-router-dom'
import Home from '../view/Home/Home'
import UserInfo from '../view/User/UserInfo'
let Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/user" component={UserInfo}/> 
      </Switch>
    </Router>
  )
}

export default Routers