import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <div className="loader">
          <FontAwesomeIcon icon={faSpinner} size="8x" spin />
    </div>
  )
}
