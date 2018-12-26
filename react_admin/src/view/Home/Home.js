import React , {Component} from 'react'
import Xheader from '../../component/PublicPage/XHeader'
import Xbanner from '../../component/HomePage/Xbanner'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList:[]
    }
  }

  render() {
    return (
      <div>
        <Xheader />
        <div className="content">
          <Xbanner />
        </div>
      </div>
    )
  }
}

export default Home