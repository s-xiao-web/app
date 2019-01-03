import React, { Component } from 'react'
import { Carousel } from 'antd'
import '../../static/css/banner.less'
import axios from 'axios'
const imgArr = [
  require('../../static/img/banner/banner1.jpg'),
  require('../../static/img/banner/banner2.jpg'),
  require('../../static/img/banner/banner3.jpg')
]
class Xbanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgData: [],
      navData: [],
      currentIndex: false,
      currentIsShow: false,
      timer: null
    }
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }

  handleIsShow(i) {
    this.setState({
      currentIsShow: true,
      currentIndex: i
    })
  }

  handleIsOut() {
    let time = setTimeout(() => {
      this.setState({
        currentIsShow: false,
        currentIndex: false
      })
    }, 1000)
    this.setState({
      timer:time
    })
  }

  MouseOut(e) {
    this.setState({
      currentIsShow: false,
      currentIndex: false
    })
  }
  
  MouseOver(e) {
    clearTimeout(this.state.timer)
  }
  
  componentDidMount() {
    console.log(document.cookie)
    axios('/api/admin/category').then(res => {
      let _D = res.data.splice(0, 5)
      this.setState({
        navData: _D
      })
    })
  }

  render() {
    let arr = this.state.navData[this.state.currentIndex]
    let obj = null
    if (arr) {
      obj = arr.children.map((item, index) => {
        return (
          <li key={index}>
            <span className="title">{item.name}</span>
            <span>描述暂未添加</span>
          </li>
        )
      })
    }
    return (
      <div className="banner_wrap">
        <Carousel autoplay>
          {
            imgArr.map((v, i) => {
              return (
                <div key={i}><img src={v} alt="" /></div>
              )
            })
          }
        </Carousel>
        <div className="banner_aside_wrap" onMouseLeave={this.MouseOut.bind(this)}>
          <ul className="aside_tab">
            {
              this.state.navData.map((item, index) => {
                return (
                  <li key={index} 
                  onMouseOver={this.handleIsShow.bind(this,index)}
                  className={`${this.state.currentIndex === index ? 'active': ''}`}
                  >
                    <i></i>
                    <span>{item.name}</span>
                  </li>
                )
              })
            }
          </ul>
          <ul
            className="show_box" 
            style={{visibility:(this.state.currentIsShow )? "visible":"hidden" }}
            onMouseEnter={this.MouseOver.bind(this)}
          >
            {
              obj
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Xbanner