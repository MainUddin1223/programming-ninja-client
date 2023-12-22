'use client'

import { Spin } from "antd"

const Loader = () => {
  return (
      <div style={{position:"absolute",top:'0',bottom:'0',right:'0',left:'0',backgroundColor:'rgba(251, 248, 248, 0.25)',zIndex:'9999'}}>
          <Spin tip="Loading" size="large" style={{position:'absolute',top:'50%',left:'50%',transition:"transform(-50%,-50%)",color:'red'}}></Spin>
    </div>
  )
}

export default Loader