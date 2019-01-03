import React from 'react'
import Layout from '../Layout'
import Uheader from '../../component/UserLogin/Uheader'
import '../../static/css/userinfo.less'
const Bimg = require('../../static/img/bg.jpg')

const UserInfo = () => {
  return (
    <Layout>
      <div className="">
        <Uheader></Uheader>
      </div>
    </Layout>
  )
}
export default UserInfo