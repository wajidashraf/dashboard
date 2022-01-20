import React from 'react'
import './buttons.css'

const Button = () => {
  return (
    <div className='btns'>
      <div>
        <button>amount of vistors</button>
      </div>
      <div>
        <button className='active'>male vs. female</button>
      </div>
      <div>
        <button>avg. age</button>
      </div>
      <div>
        <button>avg. time</button>
      </div>
    </div>
  )
}

export default Button
