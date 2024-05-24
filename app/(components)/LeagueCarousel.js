'use client';
import React, {useState, useEffect, useContext} from 'react'
import { DataContext } from './DataContext';
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

    const { setCurrentLeague } = useContext(DataContext);
    const [localLeague, setLocalLeague] = useState('MLS')

    const selectLeague = (league) => {
        setCurrentLeague(league);
        setLocalLeague(league);
    }

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
                <button onClick={() => selectLeague(allLeagues.trending)}>
                    <TrendingCard curLeague={localLeague} />
                </button>
            </div> 
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.premierLeague)}>
                    <PremierLeagueCard curLeague={localLeague} />
                </button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.mls)}>
                    <MLSCard curLeague={localLeague} />
                </button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.laLiga)}>
                    <LaLigaCard curLeague={localLeague} />
                </button>
            </div>
            <div className='carousel-item'>
                <button onClick={() => selectLeague(allLeagues.ligaMX)}>
                    <LigaMXCard curLeague={localLeague} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default LeagueCarousel