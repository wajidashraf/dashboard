import React from 'react'
import './style.css'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const ChartFirst = (props) => {
  console.log(props.data)
  const data = {
    labels: props.data.label,
    datasets: [
      {
        data: props.data.data1,
        lineTension: 0.4,

        borderColor: ['rgba(255, 109, 132, 1)'],
        backgroundColor: ['rgba(55, 106, 206, 0.2)'],
        borderWidth: 2,
        fill: props.data.fill,
      },
      {
        data: props.data.data2,
        borderColor: ['rgba(155, 109, 132, 1)'],
        backgroundColor: ['rgba(255, 146, 196, 0.2)'],
        borderWidth: 2,
        fill: props.data.fill,
        lineTension: 0.4,
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'index',
      intersec: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: props.data.min,
        max: props.data.max,
        ticks: {
          // forces step size to be 50 units
          stepSize: props.data.step,
        },
      },
    },
  }

  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartFirst
