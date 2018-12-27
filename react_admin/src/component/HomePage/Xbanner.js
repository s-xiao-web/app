import React, { Component } from 'react'
import { Carousel } from 'antd'
import '../../static/css/banner.less'

const imgArr = [
  require('../../static/img/banner/banner1.jpg'),
  require('../../static/img/banner/banner2.jpg'),
  require('../../static/img/banner/banner3.jpg')
]
// const icon = require('../../static/img/banner/icon.png')

// const Xnav = (props) => {

// }

// const Xbox = (props) => {

// }

class Xbanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgData: []
    }
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <div className="banner_wrap">
        <Carousel autoplay>
          {
            imgArr.map((v,i) => {
              return (
                <div key={i}><img src={v} alt=""/></div>
              )
            })
          }
        </Carousel>
        <div className="banner_aside_wrap">
          <ul className="aside_tab">
            <li>
              <i></i>
              <span>菜谱大全</span>
            </li>
            <li>
              <i></i>
              <span>食材大全</span>
            </li>
            <li>
              <i></i>
              <span>饮食健康</span>
            </li>
            <li>
              <i></i>
              <span>专题专区</span>
            </li>
            <li>
              <i></i>
              <span>一起红</span>
            </li>
          </ul>
          <ul className="show_box">
            <li>
              <span className="title">内容</span>
              <span>描述</span>
            </li>
            <li>
              <span className="title">阿萨德</span>
              <span>描述</span>
            </li>
            <li>
              <span className="title">吃饭</span>
              <span>描述</span>
            </li>
            <li>
              <span className="title">树胶</span>
              <span>描述</span>
            </li>
            <li>
              <span className="title">睡觉</span>
              <span>描述</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Xbanner