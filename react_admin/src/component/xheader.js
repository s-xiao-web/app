import React, { Component } from 'react';
import '../static/css/xheader.less'
import XDidlog from './xhead-comp/Dialog-login'
import XRegister from './xhead-comp/Dialog-register'

function Tabli(props) {
  let arrList = props.navData.map((item, index) => {
    return <li key={index} className="cur">{item}</li>
  })
  return (
    <ul className="left-wrap">{arrList}</ul>
  )
}

function Login(props) {
  return (
    <div className="login_wrap">
      <div className="login" onClick={props.onClick}>登录</div>
      <div className="regsit" onClick={props.onClick}>注册</div>
    </div>
  )
}

class Xheader extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      visRegister: false,
      numbers: "hahahah"
    }
  }

  showModal(e) {
    this.setState({
      visible: !this.state.visible
    })
  }

  showRModal(e) {
    this.setState({
      visRegister: !this.state.visRegister
    })
  }

  renderTabli(i) {
    return this.props.navData.map((item, index) => {
      return <Tabli key={index} num={item} />
    })
  }

  render() {
    return (
      <div className='headerwrap'>
        <div className='content'>
          <Tabli navData={this.props.navData} />
          <div className="login_wrap">
            <div className="login" onClick={this.showModal.bind(this)}>登录</div>
            <div className="regsit" onClick={ this.showRModal.bind(this) }>注册</div>
          </div>
        </div>
        <XDidlog visible={this.state.visible} onClick={(e) => this.showModal(e)} />
        <XRegister visRegister={this.state.visRegister} onClick={ (e)=> this.showRModal(e)}/>
      </div>
    )
  }
}

export default Xheader