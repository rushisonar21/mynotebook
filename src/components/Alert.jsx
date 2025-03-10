import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import alertContext from '../contexts/alertContext'

function Alert(props) {
  const alert_context = useContext(alertContext)
  const alert = alert_context.alert
  return (
    <div style={{height: '40px'}}>
    {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.msg}  
    </div>
    }
    </div>
  )
}

Alert.propTypes = {
  msg : PropTypes.string,
  type : PropTypes.string, 
}

export default Alert