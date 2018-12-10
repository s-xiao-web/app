import React, { Component } from 'react';
import '../static/css/xheader.less'

function Tabli(props) {
  return (
    <li className="cur">{props.num}</li>
  )
}

class Xheader extends Component {
  constructor() {
    super()
    this.state = {
      numbers: "hahahah"
    }
  }
  renderTabli(i) {
    return this.props.navData.map(item => {
      return <Tabli num={item}/>
    })
  }
  render() {
    return (
      <div className='headerwrap'>
        <ul class="left-wrap">
          {this.renderTabli(1)}
        </ul>
      </div>
    )
  }
}

export default Xheader