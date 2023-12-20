import React from 'react'

import './error-indicator.css'
import icon from './error.jpg'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" width={64} height={64}/>
            <span className="boom">Bad weather</span>
            <span>
                WRONG
            </span>
            <span>
                Fixing!
            </span>
        </div>
    )
}

export default ErrorIndicator
