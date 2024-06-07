import React from 'react'
import UpcomingMatchCard from '../(matchcards)/UpcomingMatchCard'
import PastMatchCard from '../(matchcards)/PastMatchCard'
import LiveMatchCard from '../(matchcards)/LiveMatchCard'

const Schedule = () => {

  // ft = Full Time, ucg = Upcoming, live = Live

  const mockFixtureData = [
    {id: 1, type: "ft", date: "April 10, 2024", team1: 'Everton', team2: 'Burnley', team1Score: "2", team2Score: "1"},
    {id: 2, type: "ft", date: "April 10, 2024", team1: 'Everton', team2: 'Burnley', team1Score: "2", team2Score: "1"},
    {id: 3, type: "ft", date: "April 10, 2024", team1: 'Everton', team2: 'Burnley', team1Score: "2", team2Score: "1"},
    {id: 4, type: "ft", date: "April 10, 2024", team1: 'Everton', team2: 'Burnley', team1Score: "2", team2Score: "1"},
    {id: 5, type: "ft", date: "April 10, 2024", team1: 'Everton', team2: 'Burnley', team1Score: "2", team2Score: "1"},
    {id: 6, type: "ucg", date: "August 27, 2024", time: '7:30 AM', team1: 'Brighton', team2: 'Newcastle'},
    {id: 7, type: "ucg", date: "August 27, 2024", time: '7:30 AM', team1: 'Brighton', team2: 'Newcastle'},
    {id: 8, type: "ucg", date: "August 27, 2024", time: '7:30 AM', team1: 'Brighton', team2: 'Newcastle'},
    {id: 9, type: "ucg", date: "August 27, 2024", time: '7:30 AM', team1: 'Brighton', team2: 'Newcastle'},
    {id: 10, type: "ucg", date: "August 27, 2024", time: '7:30 AM', team1: 'Brighton', team2: 'Newcastle'},
    {id: 11, type: "live", curMinute: "79'", team1: 'Brighton', team2: 'Newcastle', team1Score: 0, team2Score: 2},
    {id: 12, type: "live", curMinute: "79'", team1: 'Brighton', team2: 'Newcastle', team1Score: 0, team2Score: 2},
    {id: 13, type: "live", curMinute: "79'", team1: 'Brighton', team2: 'Newcastle', team1Score: 0, team2Score: 2},
    {id: 14, type: "live", curMinute: "79'", team1: 'Brighton', team2: 'Newcastle', team1Score: 0, team2Score: 2},
    {id: 15, type: "live", curMinute: "79'", team1: 'Brighton', team2: 'Newcastle', team1Score: 0, team2Score: 2},
  ]

  return (
    <div className='overflow-y-scroll bg-gray-100 h-[55vh] flex-row justify-center items-center mx-14 p-4'>
      
      {/* Card for when there is an upcoming game that has not been played yet */}
      {/* <UpcomingMatchCard /> */}

      {mockFixtureData.map(item => {

        switch (item.type) {
          case "ucg":
            return (
              <UpcomingMatchCard key={item.id} date={item.date} time={item.time} 
              team1={item.team1} team2={item.team2} />
            )
          case "ft":
            return (
              <PastMatchCard key={item.id} date={item.date} team1={item.team1} 
              team2={item.team2} team1Score={item.team1Score} team2Score={item.team2Score} />
            )
          case "live":
            return (
              <LiveMatchCard key={item.id} curMinute={item.curMinute} team1={item.team1}
              team2={item.team2} team1Score={item.team1Score} team2Score={item.team2Score} />
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