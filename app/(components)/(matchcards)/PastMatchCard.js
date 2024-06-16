import React from 'react'

const PastMatchCard = ({ homeTeam, awayTeam, homeScore, awayScore, month, day, year }) => {
  return (
    
    <div className="card w-full h-32 bg-base-100 shadow-md my-2">
        <div className="card-body grid grid-cols-10">
          <div className='sm:w-7/10 col-span-7 border-r-2 border-slate-500'>
            <div className='grid grid-cols-2'>

              {/* Col 1 where team names go */}
              <div className='grid grid-rows-2 gap-4 justify-start items-start sm:w-60%'>
                <div><p className='truncate'>{homeTeam}</p></div>
                <div><p className='truncate'>{awayTeam}</p></div>
              </div>

              {/* Col 2 where scores go */}
              <div className='grid grid-rows-2 gap-4 justify-end items-end mr-2'>
                <div><p>{homeScore}</p></div>
                <div><p>{awayScore}</p></div>
              </div>

            </div>
          </div>
          <div className='sm:w-3/10 col-span-3 text-center'>
            <div className='grid grid-rows-2 gap-1'>
              <div>
                <p>FT</p>
              </div>
              <div>
                <p>{month} {day}</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default PastMatchCard