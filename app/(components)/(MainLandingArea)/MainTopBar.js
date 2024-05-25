import React from 'react';

const MainTopBar = ({ league, leagueColor }) => {

  const leagueTextColor = {
    "MLS": 'text-white',
    "Premier League": 'text-premTextColor',
    "La Liga": 'text-white',
    "Liga MX": 'text-black',
    "Trending": 'text-black'
  }

  return (
    <div className='grid grid-cols-2 gap-1 ml-2 mr-2'>
      <div className={`text-center border-b-2 ${leagueColor} ${leagueTextColor[league]}`}>
        <h1>Live Game Chat Rooms</h1>
      </div>

      <div className={`text-center border-b-2 ${leagueColor} ${leagueTextColor[league]}`}>
        <h1>League Schedule</h1>
      </div>
    </div>
  )
}

export default MainTopBar