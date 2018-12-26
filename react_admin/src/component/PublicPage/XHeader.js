import React, {Component} from 'react'
import '../../static/css/header.less'

const LeftNav = (props) => {
  return (
    <li>{props.value}</li>
  )
}

const LeftNavWrap = (props) => {
  let leftArr = []
  props.data.map((item, index) => leftArr.push( <LeftNav key={index} value={item}/> ))
  return (
    <ul className="left_nav_wrap">{leftArr}</ul>
  )
}

const RightWrap = () => {
  return(
    <div className="right_nav_wrap">
      <ul className="login_wrap">
        <li><span>登录</span></li>
        <li><span>注册</span></li>
      </ul>
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
      navList: ['首页','菜谱','食材','甄选','健康','专题','社区','话题','活动','搜索']
    }
  }

  renderLeftNav(i) {
    return <LeftNav key={i} value={this.state.navList[i]}/>
  }

  render() {
    return (
      <div className="header_wrap">
        <LeftNavWrap data={this.state.navList} />
        <RightWrap />
      </div>
    )
  }
}

export default Xheader