import React from 'react'
import './subscribe.css'
const Subscribe = () => {
  return (
    <div className='sub-container'>
        <div className="sub-content">
            <h3>Don’t Miss Our News</h3>
            <div className='input'>
                <input type="text" placeholder='Your email address' />
                <button>
                    Subcribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe