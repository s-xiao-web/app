import React, { Component } from 'react'
import '../../static/css/header.less'
import LoginBox from '../../component/HomePage/Login'
import { Input, message } from 'antd'
import axios from 'axios'
import session from 'sessionstorage'
import { NavLink } from "react-router-dom"
const userImg = require('../../static/img/icon1.png')

const LeftNav = (props) => {
  return (
    <li>{props.value}</li>
  )
}

const LeftNavWrap = (props) => {
  let leftArr = []
  props.data.map((item, index) => leftArr.push(<LeftNav key={index} value={item} />))
  return (
    <ul className="left_nav_wrap">{leftArr}</ul>
  )
}

// 登录注册
const RightWrap = (props) => {
  let ele = null
  if (!props.isLoggedIn) {
    ele = (
      <ul className="login_wrap">
        <li><span onClick={props.onClick}>登录</span></li>
        <li><span>注册</span></li>
      </ul>
    )
  } else {
    ele = (
      <ul className="login_wrap">
        <li className="other" >
          <NavLink to='/user'>
            <img src={userImg} alt="123"/>     
          </NavLink>
        </li>
        <li><span onClick={props.outLogin}>退出</span></li>
      </ul>
    )
  }
  return (
    <div className="right_nav_wrap">
      {ele}
      <ul className="other_wrap">
        <li>
          <span></span>
          <span>发布</span>
        </li>
        <li>
          <span>签到有礼</span>
        </li>
      </ul>
    </div>
  )
}

class Xheader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: ['首页', '菜谱', '食材', '甄选', '健康', '专题', '社区', '话题', '活动', '搜索'],
      visible: false,
      username: '',
      password: '',
      isLoggedIn: null
    }
  }

  componentDidMount() {
    if (session.getItem('userId')) {
      this.setState({
        isLoggedIn:(JSON.parse(session.getItem('userId'))).data
      })
      // this.isLoggedIn = (JSON.parse(session.getItem('userId'))).data
    }
  }

  renderLeftNav(i) {
    return <LeftNav key={i} value={this.state.navList[i]} />
  }

  showLoginFn() {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleCancel() {
    this.setState({
      visible: false
    })
  }

  handleOk = (e) => {
    axios.post('/index/main/user/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      let { data } = res
      if (!data.code) {
        this.setState({
          isLoggedIn: true
        })
        message.info('欢迎回来， XXXX')
        this.setState({
          visible: false,
        })
        session.setItem('userId',JSON.stringify(data.data))
      }
    })
  }

  handleChangeUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChangeWord(e) {
    this.setState({
      password: e.target.value
    })
  }
// 退出登录
  outLogin() {
    session.removeItem('userId')
    this.setState({
      isLoggedIn: null
    })
  }

  render() {
    return (
      <div className="header_wrap">
        <LeftNavWrap data={this.state.navList} />
        <RightWrap 
        onClick={this.showLoginFn.bind(this)}
        isLoggedIn={this.state.isLoggedIn}
        outLogin={this.outLogin.bind(this)}
        />
        <LoginBox
          visible={this.state.visible}
          title="登录"
          onCancel={this.handleCancel.bind(this)}
          onOk={this.handleOk.bind(this)}
        >
          <ul className="inp_box">
            <li>
              <span>用户名</span>
              <Input
                placeholder="请输入用户名"
                value={this.state.username}
                onChange={this.handleChangeUser.bind(this)}
              />
            </li>
            <li>
              <span>密码</span>
              <Input
                placeholder="请输入密码"
                value={this.state.password}
                onChange={this.handleChangeWord.bind(this)}
              />
            </li>
          </ul>
        </LoginBox>
      </div>
    )
  }
}

export default Xheader