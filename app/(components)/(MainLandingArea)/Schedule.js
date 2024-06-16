import React from 'react'
import UpcomingMatchCard from '../(matchcards)/UpcomingMatchCard'
import PastMatchCard from '../(matchcards)/PastMatchCard'
import LiveMatchCard from '../(matchcards)/LiveMatchCard'

const Schedule = ({ leagueSchedule }) => {

  return (
    <div className='overflow-y-scroll bg-gray-100 h-[55vh] flex-row justify-center items-center mx-14 p-4'>
      
      {/* Card for when there is an upcoming game that has not been played yet */}
      {/* <UpcomingMatchCard /> */}

      {leagueSchedule.map(item => {

        switch (item.gameStatus) {
          case "TBD":
            return (
              <UpcomingMatchCard key={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              month={item.month} day={item.day} year={item.year} time={item.time} />
            )
          case "FT":
            return (
              <PastMatchCard key={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              homeScore={item.homeScore} awayScore={item.awayScore} month={item.month} 
              day={item.day} year={item.year} />
            )
          case "LIVE":
            return (
              <LiveMatchCard key={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              homeScore={item.homeScore} awayScore={item.awayScore} gameStatus={item.gameStatus} />
            )
          case "HT":
            return (
              <LiveMatchCard key={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              homeScore={item.homeScore} awayScore={item.awayScore} gameStatus={item.gameStatus} />
            )
          default:
            return null
        }
      })}

      {/* Card for when the game was already played and is over */}
      {/* <PastMatchCard /> */}

      {/* Card for when there is a live game with current minute and score */}

    </div>
  )
}

export default Schedule