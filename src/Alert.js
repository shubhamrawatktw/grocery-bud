import React, { useEffect } from 'react'

const Alert = ({alert,showAlert,list}) => {
  const {type,msg } = alert
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      showAlert()
    },3000)

    return ()=>clearTimeout(timeout)
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
