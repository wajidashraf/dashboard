import React from 'react'
import { Nationality, RepeatVistor } from './buttons/AalysisHeader'
import LineChart from './chart/LineChart'
import { Table2 } from './table/Table'
import { table2 } from './table/tableData'
const RepeatedVisitor = () => {
  return (
    <div className='row py-4 my-4 last'>
      <div className='col-6 table2'>
        <RepeatVistor />
        <div className='pt-5'>
          <Table2 table={table2} />
        </div>
      </div>
      <div className='col-6 '>
        <Nationality />
        <div className='mt-5 '>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default RepeatedVisitor
