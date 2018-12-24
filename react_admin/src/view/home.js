import React, { Component } from 'react';
import Xheader from '../component/xheader';
import axios from 'axios'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      navData: [
        '首页','菜谱','食材','珍选','健康','专题','社区','话题','活动','搜索'
      ]
    }
  }
  render() {
    return (
      <div>
        <Xheader navData={this.state.navData} />
      </div>
    )
  }
  async componentWillMount() {
    let {data} = await axios.get("/api/admin/category")
    let arr = data.map((item) => {
      return item.name
    })
    this.setState({
      navData:arr
    })
  }
}

export default Home