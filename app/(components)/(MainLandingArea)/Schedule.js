import React from 'react'
import UpcomingMatchCard from '../(matchcards)/UpcomingMatchCard'
import PastMatchCard from '../(matchcards)/PastMatchCard'

const Schedule = () => {

  const mockFixtureData = [
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
    {id: 1, date: "August 27, 2024", time: '7:30 AM', team1: 'Everton', team2: 'Burnley'},
  ]

  return (
    <div className='overflow-y-scroll bg-gray-100 h-[55vh] flex-row justify-center items-center mx-14 p-4'>
      
      {/* Card for when there is an upcoming game that has not been played yet */}
      {/* <UpcomingMatchCard /> */}

      {mockFixtureData.map(item => (
        <UpcomingMatchCard key={item.id} date={item.date} time={item.time} 
        team1={item.team1} team2={item.team2} />
      ))}

      {/* Card for when the game was already played and is over */}
      {/* <PastMatchCard /> */}

      {/* Card for when there is a live game with current minute and score */}

    </div>
  )
}

export default Schedule