import React from 'react'
import Select from './Select'
import Time from './Time'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav className='wrapper'>
        <div className='left'>
          <h2 className='logo'>LOGO</h2>
          <div className='bars'>
            <i className='fa fa-bars'></i>
          </div>
          <div className='search'>
            <input type='text' placeholder='Search...' />
            <span>
              <i className='fa fa-search'></i>
            </span>
          </div>
        </div>
        <div className='right'>
          <div className='pills'>
            <span>
              <i className='fa fa-gear'></i>
            </span>
            <span>50</span>
            <span>
              <i className='fa fa-user'></i>
            </span>
          </div>
          <div className='select'>
            <Select />
          </div>
          <div className='time'>
            <Time />
          </div>
          <div className='bars'>
            <i className='fa fa-battery-half'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
