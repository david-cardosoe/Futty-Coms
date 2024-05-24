import React from 'react'

const TrendingCard = ({ curLeague }) => {

  const curBackColor = {
    true: 'bg-violet-400',
    false: 'bg-base-100'
  }

  let setBgColor = false;

  if (curLeague == "Trending") {
    setBgColor = true;
  } else {
    setBgColor = false
  }

  return (
    <div className={`card card-compact w-56 h-48 ${curBackColor[setBgColor]} image-full hover:bg-violet-400`}>
        <figure><img src="/fifa.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">Trending Matches</h2>
            <p>Check out trending matches being played!</p>
        </div>
    </div>
  )
}

export default TrendingCard