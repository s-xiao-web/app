import React from 'react';
import '../../static/css/xheader.less'
import { Modal, Input } from 'antd';

let XDidlog = (props) => {

  let handleOk = (e) => {
    props.onClick(e)
  }

  let handleCancel = (e) => {
    props.onClick(e)
  }
  
  return (
    <Modal
      title="登录"
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <ul className="dialog_wrap">
        <li>
          <span>用户名</span>
          <Input placeholder="请输入用户名" />
        </li>
        <li>
          <span>密码</span>
          <Input placeholder="请输入密码" />
        </li>
      </ul>
    </Modal>
  )
}

export default XDidlog