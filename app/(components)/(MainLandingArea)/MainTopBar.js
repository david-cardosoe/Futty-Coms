import React from 'react'

const MainTopBar = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='text-center border-b-2'>
        <h1>Live Game Chat Rooms</h1>
      </div>

      <div className='text-center border-b-2'>
        <h1>League Schedule</h1>
      </div>
    </div>
  )
}

export default MainTopBar