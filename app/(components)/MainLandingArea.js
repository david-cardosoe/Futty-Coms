'use client'
import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import MainTopBar from './(MainLandingArea)/MainTopBar';

const MainLandingArea = () => {

    const { currentLeague } = useContext(DataContext);

    const leagueColors = {
        "MLS": 'bg-mlsColor',
        "Premier League": 'bg-plColor',
        "La Liga": 'bg-laligaColor',
        "Liga MX": 'bg-ligamxColor',
    }



  return (
    <div className='m-4'>
        <MainTopBar league={currentLeague} leagueColor={leagueColors[currentLeague]} />
    </div>
  )
}

export default MainLandingArea