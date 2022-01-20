import React, { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-Us', {
      hour: '2-digit',
      minute: '2-digit',
    })
  )
  const getTime = () => {
    const time = new Date().toLocaleTimeString('en-Us', {
      hour: '2-digit',
      minute: '2-digit',
    })
    setTime(time)
    console.log('call')
  }

  useEffect(() => {
    setInterval(() => {
      getTime()
    }, 60000)
  }, [time])

  return (
    <>
      <strong>{time}</strong>
    </>
  )
}

export default Time
