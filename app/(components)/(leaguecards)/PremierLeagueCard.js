import React from 'react'

const PremierLeagueCard = () => {
  return (
    <div>
        <button>
            <div className="card card-compact w-56 h-48 bg-base-100 image-full">
                <figure><img src="/premLion.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center mt-8">Premier League</h2>
                    <p>Check out Premier League matches being played!</p>
                </div>
            </div>
        </button>
    </div>
  )
}

export default PremierLeagueCard