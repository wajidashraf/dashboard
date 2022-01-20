import React from 'react'
import ChartFirst from './ChartFirst'

const data = {
  label: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul'],
  data1: [100, 1000, 800, 1800, 700, 1700, 1000],
  data2: [700, 1500, 1300, 400, 1200, 1000, 1900],
  fill: false,
  min: 0,
  max: 2000,
  step: 500,
}

const LineChart = () => {
  return <ChartFirst data={data} />
}

export default LineChart
