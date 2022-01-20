import React from 'react'

const List = () => {
  return (
    <div className='row sidebarList'>
      <ul>
        <li>
          <i className='fa fa-laptop'></i> <span>DASHBOARD</span>
        </li>
        <li className='active'>
          <i className='fa fa-comments '></i> <span>MESSAGE</span>
        </li>
        <li>
          <i className='fa fa-user-tie'></i> <span>CUSTOMER</span>
        </li>
        <li>
          <i className='fa fa-gear'></i> <span>SETTING</span>
        </li>
        <li>
          <i className='fa fa-sign-in-alt'></i> <span>LOGIN</span>
        </li>
      </ul>
    </div>
  )
}

export default List
