import React, { Component } from 'react'
import Xbanner from '../../component/HomePage/Xbanner'
import Layout from '../Layout'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: []
    }
  }
  render() {
    return (
      <Layout>
        <div className="content">
          <Xbanner />
        </div>
      </Layout>
    )
  }
}

export default Home