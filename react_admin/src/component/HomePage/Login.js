import React from 'react'
import { Modal } from 'antd'
const LoginBox = (props) => {
  return (
    <Modal
      title="登录"
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      cancelText='关闭'
      okText="确定"
    >
    {props.children}
    </Modal>
  )
}

export default LoginBox