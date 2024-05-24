import React from 'react'
import Nav from "@/app/(components)/Nav"
import LeagueCarousel from '../(components)/LeagueCarousel'
import MainLandingArea from '../(components)/MainLandingArea'
import { DataProvider } from '../(components)/DataContext'

const LandingPage = () => {
  return (
    <main>
      <DataProvider>
        <Nav />

        <LeagueCarousel />

        <MainLandingArea />
      </DataProvider>
    </main>
  )
}

export default LandingPage