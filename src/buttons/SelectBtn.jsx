import React from 'react'
import './buttons.css'

const SelectBtn = () => {
  return (
    <div className='select_box pr-1'>
      <i className='fas fa-ellipsis-v dots'></i>
      <i className='fas fa-angle-down arrow'></i>
      <select
        className='select'
        name='period'
        id='period'
        defaultValue='Last Week'
      >
        <option value='Last Week'>Last Week</option>
        <option value='Last Month'>Last Month</option>
        <option value='Last Year'>Last Year</option>
      </select>
    </div>
  )
}

export default SelectBtn
