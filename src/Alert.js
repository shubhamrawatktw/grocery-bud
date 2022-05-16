import React, { useEffect } from 'react'

const Alert = ({alert,showAlert,list}) => {
  const {type,msg } = alert
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      showAlert(false)
    },3000)
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
