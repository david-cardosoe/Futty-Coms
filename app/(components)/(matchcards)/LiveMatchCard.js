import React from 'react'

const LiveMatchCard = ({ curMinute, team1, team2, team1Score, team2Score }) => {
  return (
    <div className="card w-full h-32 bg-base-100 shadow-md my-2">
        <div className="card-body grid grid-cols-10">
          <div className='col-span-7 border-r-2 border-slate-500'>
            <div className='grid grid-cols-2'>

              {/* Col 1 where team names go */}
              <div className='grid grid-rows-2 gap-4 justify-start items-start'>
                <div><p>{team1}</p></div>
                <div><p>{team2}</p></div>
              </div>

              {/* Col 2 where scores go */}
              <div className='grid grid-rows-2 gap-4 justify-end items-end mr-2'>
                <div><p>{team1Score}</p></div>
                <div><p>{team2Score}</p></div>
              </div>

            </div>
          </div>
          <div className='col-span-3 text-center'>
            <div>
                <p>{curMinute}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LiveMatchCard