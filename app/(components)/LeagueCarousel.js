'use client';
import React, {useState, useEffect} from 'react'
import TrendingCard from './(leaguecards)/TrendingCard'
import PremierLeagueCard from './(leaguecards)/PremierLeagueCard'
import MLSCard from './(leaguecards)/MLSCard'
import LaLigaCard from './(leaguecards)/LaLigaCard'
import LigaMXCard from './(leaguecards)/LigaMXCard'

const LeagueCarousel = () => {

    const allLeagues = Object.freeze({
        mls: 'MLS',
        premierLeague: "Premier League",
        laLiga: "La Liga",
        ligaMX: "Liga MX",
        trending: "Trending"
    });

    const [curLeagueSelected, setCurLeagueSelected] = useState(allLeagues.mls);

    const selectLeague = (league) => {
        setCurLeagueSelected(league);
    }

    useEffect(() => {
        console.log(curLeagueSelected);
    }, [curLeagueSelected]);

    /*
    Make sure to make it so whatever current league card is 
    selected has some sort of identifier. Could be a darker
    background or border, just something to identify it is 
    currently selected.
    */

  return (
    <div className='flex flex-row justify-center'>
        <div className="carousel carousel-center max-w-full p-4 space-x-1 rounded-box">
            <div className="carousel-item">
                <button onClick={() => selectLeague(allLeagues.trending)}><TrendingCard /></button>
            </div> 
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.premierLeague)}><PremierLeagueCard /></button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.mls)}><MLSCard /></button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.laLiga)}><LaLigaCard /></button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.ligaMX)}><LigaMXCard /></button>
            </div>
        </div>
    </div>
  )
}

export default LeagueCarousel