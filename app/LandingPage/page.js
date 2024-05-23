import React from 'react'
import Nav from "@/app/(components)/Nav"
import LeagueCarousel from '../(components)/LeagueCarousel'
import MainLandingArea from '../(components)/MainLandingArea'

const LandingPage = () => {
  return (
    <main>
      <Nav />

      <LeagueCarousel />

      <MainLandingArea />
    </main>
  )
}

export default LandingPage