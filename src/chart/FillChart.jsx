import React from 'react'
import ChartFirst from './ChartFirst'

const data = {
  label: ['Sun', 'Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat'],
  data1: [10, 13, 38, 18, 27, 9, 33],
  data2: [20, 17, 11, 40, 20, 15, 4],
  fill: true,
  min: 0,
  max: 50,
  step: 10,
}

const FillChart = () => {
  return <ChartFirst data={data} />
}

export default FillChart
