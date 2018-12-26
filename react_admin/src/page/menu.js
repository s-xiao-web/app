import React from 'react'
import { NavLink } from "react-router-dom"
const mainMenu = {
  marginRight: "20px"
}
const selectedStyle = {
  backgroundColor: 'orange',
  color: 'slategray'
}

export const MainMenu = () => {
  return (
    <nav >
      <NavLink style={mainMenu} activeStyle={selectedStyle} to="/">首页</NavLink>
      <NavLink style={mainMenu} activeStyle={selectedStyle}  to="/about">关于我们</NavLink>
    </nav>
  )
}

export const AboutMenu = () => (
  <ul className="about-menu">
    <li>
      <NavLink to='/about' exact activeStyle={selectedStyle}>公司简介</NavLink>
    </li>
    <li>
      <NavLink to='/about/history' activeStyle={selectedStyle}>公司历史</NavLink>
    </li>
    <li>
      <NavLink to='/about/services' activeStyle={selectedStyle}>公司服务</NavLink>
    </li>
    <li>
      <NavLink to='/about/location' activeStyle={selectedStyle}>企业位置</NavLink>
    </li>
  </ul>
)