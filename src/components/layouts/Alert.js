import React from 'react'

export const Alert = ({alert}) => {
  return (
    alert !== null &&
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-exclamation-circle'/> {alert.msg}
    </div>
  )
}

export default Alert
