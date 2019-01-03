import React from 'react'
import Xheader from '../component/PublicPage/XHeader'

const layout = (props) => {
  return (
    <div>
      <Xheader />
      {props.children}
    </div>
  )
}

export default layout