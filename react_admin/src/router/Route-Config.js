import React from 'react'
import { HashRouter, Route, Switch,  } from 'react-router-dom'
import Home from '../view/Home/Home'
import { About } from '../page/page' 

let Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/about" component={About}/> 
      </Switch>
    </HashRouter>
  )
}

export default Router