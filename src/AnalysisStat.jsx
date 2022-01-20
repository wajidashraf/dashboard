import React from 'react'
import { AalysisHeader, StaticHeader } from './buttons/AalysisHeader'
import Button from './buttons/Button'
import FillChart from './chart/FillChart'
import CusCard from './customer/CusCard'

const AnalysisStat = () => {
  return (
    <div className='row analy_static py-3 pb-3 my-3'>
      <div className='col-lg-5 pb-4 analyCol'>
        <AalysisHeader />
        <CusCard />
      </div>
      <div className='col-lg-7 pb-4 statCol'>
        <StaticHeader />
        <div className='row'>
          <div className='col-lg-9 '>
            <FillChart />
          </div>
          <div className='col-lg-3 '>
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisStat
