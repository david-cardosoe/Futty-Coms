import React from 'react'

const UpcomingMatchCard = ({ date, time, team1, team2 }) => {
  return (
    
    <div className="card w-full h-32 bg-base-100 shadow-md my-2">
        <div className="card-body grid grid-cols-10">
          <div className='col-span-7 border-r-2 border-slate-500'>
            <div className='grid grid-rows-2 gap-4'>
              <div>
                <p>{team1}</p>
              </div>
              <div>
                <p>{team2}</p>
              </div>
            </div>
          </div>
          <div className='col-span-3 text-center'>
            <div className='grid grid-rows-2 gap-1 text-sm'>
              <div>
                <p>{date}</p>
              </div>
              <div>
                <p>{time}</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default UpcomingMatchCard