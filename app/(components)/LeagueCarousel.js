import React from 'react'
import TrendingCard from './(leaguecards)/TrendingCard'
import PremierLeagueCard from './(leaguecards)/PremierLeagueCard'

const LeagueCarousel = () => {
  return (
    <div className='flex flex-row justify-center'>
        <div className="carousel carousel-center max-w-lg p-4 space-x-1 rounded-box">
            <div className="carousel-item">
                <TrendingCard />
            </div> 
            <div className='carousel-item'>
                <PremierLeagueCard />
            </div>
        </div>
    </div>
  )
}

export default LeagueCarousel