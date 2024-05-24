import React from 'react'

const PremierLeagueCard = ({ curLeague }) => {

  const curBackColor = {
    true: 'bg-premTextColor',
    false: 'bg-base-100'
  }

  let setBgColor = false;

  if (curLeague == "Premier League") {
    setBgColor = true;
  } else {
    setBgColor = false
  }

  return (
    <div className={`card card-compact w-56 h-48 ${curBackColor[setBgColor]} image-full hover:bg-premTextColor`}>
        <figure><img src="/premLion.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">Premier League</h2>
            <p>Check out Premier League matches being played!</p>
        </div>
    </div>
  )
}

export default PremierLeagueCard