import React from 'react'

const TrendingCard = () => {
  return (
    <div className="card card-compact w-56 h-48 bg-base-100 image-full hover:bg-gray-500">
        <figure><img src="/fifa.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">Trending Matches</h2>
            <p>Check out trending matches being played!</p>
        </div>
    </div>
  )
}

export default TrendingCard