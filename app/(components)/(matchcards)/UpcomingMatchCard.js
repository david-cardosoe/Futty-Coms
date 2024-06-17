import React from 'react'

const UpcomingMatchCard = ({ homeTeam, awayTeam, month, day, year, time, id }) => {
  return (
    
    <div className="card w-full bg-base-100 shadow-md my-2" id={`${id}`}>
        <div className="card-body flex flex-col sm:flex-row">
          <div className='sm:w-7/10 sm:border-r-2 border-slate-500 flex-1'>
            <div className='grid grid-rows-2 gap-2 sm:gap-4'>
              <div>
                <p className='truncate'>{homeTeam}</p>
              </div>
              <div>
                <p className='truncate'>{awayTeam}</p>
              </div>
            </div>
          </div>
          <div className='sm:w-3/10 text-center flex-1 mt-4 sm:mt-0'>
            <div className='grid grid-rows-2 gap-1 text-sm'>
              <div>
                <p>{month} {day}, {year}</p>
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