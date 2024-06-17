import React, {useEffect, useRef} from 'react'
import UpcomingMatchCard from '../(matchcards)/UpcomingMatchCard'
import PastMatchCard from '../(matchcards)/PastMatchCard'
import LiveMatchCard from '../(matchcards)/LiveMatchCard'

const Schedule = ({ leagueSchedule, nextMatchId }) => {

  const containerRef = useRef(null)

  /*
  useEffect is used to snap to next upcoming game or live game. Uses
  containerRef to get a hold on the actual div container and snap to the id
  of the next upcoming game.

  NOTE: Need to add logic so that if there is no next game it will go to the last game
  */
  useEffect(() => {

    const scrollToMatch = () => {

      if (nextMatchId && containerRef.current) {
        const matchElement = document.getElementById(nextMatchId)

        if (matchElement) {
          matchElement.scrollIntoView({ behavior: 'auto', block: 'center'})
        } else {
          console.error("Scroll Into View not working")
        }
      }

      if (nextMatchId == null) {
        const matchElement = document.getElementById(leagueSchedule[leagueSchedule.length - 1].id)

        if (matchElement) {
          matchElement.scrollIntoView({ behavior: 'auto', block: 'center'})
        } else {
          console.error("Scroll Into View not working")
        }
      }
    }

    try {
      scrollToMatch()
    } catch (error) {
      console.log(error)
    }

  }, [nextMatchId, leagueSchedule])

  return (
    <div ref={containerRef} className='overflow-y-scroll bg-gray-100 h-[55vh] flex-row justify-center items-center mx-14 p-4'>
      
      {/* Card for when there is an upcoming game that has not been played yet */}
      {/* <UpcomingMatchCard /> */}

      {leagueSchedule.map(item => {

        switch (item.gameStatus) {
          case "TBD":
            return (
              <UpcomingMatchCard key={item.id} id={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              month={item.month} day={item.day} year={item.year} time={item.time} />
            )
          case "FT":
            return (
              <PastMatchCard key={item.id} id={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              homeScore={item.homeScore} awayScore={item.awayScore} month={item.month} 
              day={item.day} year={item.year} />
            )
          case "LIVE":
            return (
              <LiveMatchCard key={item.id} id={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
              homeScore={item.homeScore} awayScore={item.awayScore} gameStatus={item.gameStatus} />
            )
          case "HT":
            return (
              <LiveMatchCard key={item.id} id={item.id} homeTeam={item.homeTeam} awayTeam={item.awayTeam} 
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