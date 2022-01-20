import React from 'react'
import { AgeGroup, AvgTime, Menu } from './buttons/AalysisHeader'
import Time from './header/Time'
import { Table1 } from './table/Table'
import { table1 } from './table/tableData'

const CustSummry = () => {
  return (
    <div className='row custSummry py-3 my-4 justify-content-between'>
      <div className='col-4  maleVsfemale'>
        <Menu />
        <div className='maleFemale'>
          <div className='female'>
            <i className='fas fa-female'></i> <h1>40%</h1>
          </div>
          <div className='male'>
            <i className='fas fa-male'></i> <h1>50%</h1>
          </div>
        </div>
      </div>
      <div className='col-3 avg--time__box'>
        <AvgTime />

        <div className='avgTime pt-4'>
          <div>
            <Time />
          </div>
        </div>
      </div>
      <div className='col-5'>
        <AgeGroup />
        <div style={{ padding: '0 1rem' }}>
          <Table1 table={table1} />
        </div>
      </div>
    </div>
  )
}

export default CustSummry
