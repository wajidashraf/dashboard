import React from 'react'
import SelectBtn from './SelectBtn'
import './buttons.css'

const AalysisHeader = () => {
  return (
    <div
      className='row mb-4 justify-content-between'
      style={{ paddingRight: '2.5rem' }}
    >
      <div className='col-5'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            ANALYSIS
          </small>{' '}
          <span> 5</span>
        </div>
      </div>
      <div className='col-4'>
        <SelectBtn />
      </div>
    </div>
  )
}
const RepeatVistor = () => {
  return (
    <div
      className='row mb-4 justify-content-between'
      style={{ paddingRight: '2.5rem' }}
    >
      <div className='col-5'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            REPEATED VISITORS
          </small>{' '}
          <span> 9</span>
        </div>
      </div>
      <div className='col-4'>
        <SelectBtn />
      </div>
    </div>
  )
}
// ***************************
const Menu = () => {
  return (
    <div
      className='row mb-4 justify-content-between'
      style={{ paddingRight: '2rem' }}
    >
      <div className='col-9'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            MALE VS FEMALE
          </small>
        </div>
      </div>
      <div className='col-2'>
        <div
          style={{
            padding: '0.4rem',
            width: '37px',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid #eee',
          }}
        >
          <i className='fas fa-ellipsis-v dots'></i>
        </div>
      </div>
    </div>
  )
}
const Nationality = () => {
  return (
    <div
      className='row mb-4 justify-content-between'
      style={{ paddingRight: '1rem' }}
    >
      <div className='col-9'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            NATIONALITY
          </small>
        </div>
      </div>
      <div className='col-2'>
        <div
          style={{
            padding: '0.4rem',
            width: '37px',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid #eee',
          }}
        >
          <i className='fas fa-ellipsis-v dots'></i>
        </div>
      </div>
    </div>
  )
}
// ***********************
const AvgTime = () => {
  return (
    <div
      className='row mb-4 justify-content-between'
      style={{ paddingRight: '2rem' }}
    >
      <div className='col-9'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            AVG.DEWELL TIME
          </small>
        </div>
      </div>
      <div className='col-2'>
        <div
          style={{
            padding: '0.4rem',
            width: '37px',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid #eee',
          }}
        >
          <i className='fas fa-ellipsis-v dots'></i>
        </div>
      </div>
    </div>
  )
}

// **************************
const StaticHeader = () => {
  return (
    <div
      className='row mb-5 justify-content-between'
      style={{ paddingRight: '1.8rem' }}
    >
      <div className='col-4'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            STATISTICS
          </small>
        </div>
      </div>
      <div className='col-3 justify-content-center'>
        <SelectBtn />
      </div>
    </div>
  )
}

const AgeGroup = () => {
  return (
    <div
      className='row mb-5 justify-content-between'
      style={{ paddingRight: '5rem' }}
    >
      <div className='col-4'>
        <div className='analysis'>
          <small style={{ fontSize: '11px', fontWeight: 'bold' }}>
            AGE GROUP
          </small>
        </div>
      </div>
      <div className='col-3 justify-content-center'>
        <SelectBtn />
      </div>
    </div>
  )
}

export {
  AalysisHeader,
  AvgTime,
  Nationality,
  AgeGroup,
  Menu,
  StaticHeader,
  RepeatVistor,
}
