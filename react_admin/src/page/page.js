import React from 'react'
import {MainMenu, AboutMenu} from './menu'

import { Route } from "react-router-dom"

// 首页
export const Home = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <h1>我是首页的内容</h1>
    </div>
  )
}

export const About = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <h1>关于我们</h1>
      <Child />
    </div>
  )
}

export const Company = () => {
  return (
    <div>
      <h1>Company</h1>
    </div>
  )
}

export const History = () => {
  return (
    <div>
      <h1>History</h1>
    </div>
  )
}


export const Child = () => {
  return (
    <div>
      <AboutMenu></AboutMenu>
      <h1>我是子组件</h1>
      <Route path='/about' exact component={Company}/>
      <Route path='/about/history' component={History}/>
    </div>
  )
}


