import React from 'react'
import './cusCard.css'

const CusCard = () => {
  const data = [
    { icon: 'far fa-smile-wink', val: 45, color: 'lime' },
    { icon: 'far fa-angry', val: 35, color: 'steelblue' },
    { icon: 'far fa-frown', val: 20, color: 'coral' },
  ]
  return (
    <>
      <div class='row justify-content-around '>
        {data.map((cust) => {
          return (
            <div className='col-3'>
              <div className='custCard'>
                <i className={cust.icon} style={{ color: `${cust.color}` }}></i>
                <h1>{`${cust.val}%`}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CusCard
