import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
class Uheader extends Component{
  constructor(props) {
    super(props)
    document.cookie="popped=yes"
    this.state = {

    }
  }
  getHtmlEl() {
    // let doc = document.getElementById('fileEl')
    // console.log( doc )
    // console.log( ReactDOM.findDOMNode(doc) )
    console.dir()

    axios.post('/index/main/user/login', {
      username: 1,
      password: 2
    }).then(res => {
      console.log( res )
    })


  }
  fileFn() {
    alert(0)
  }

  render() {
    const show = {
      'display': 'block'
    }
    return (
      <div className="u_header_box">
        <div className="u_content">
          <div className="u_content_left">
            <div className="userImg" onClick={this.getHtmlEl.bind(this)}>
          
            </div>
            <div className="useMsg">
              <p>我是用户的姓名</p>
              <p>2019-12-32 加入</p>
              <input type="file" style={show} ref="fileInp" onClick={this.fileFn.bind(this)}/>
            </div>
          </div>
          <div className="u_content_right">
          <ul>
              <li>
                <p>0</p>
                <p>关注</p>
              </li>
              <li>
                <p>0</p>
                <p>关注</p>
              </li>
              <li>
                <p>0</p>
                <p>关注</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Uheader