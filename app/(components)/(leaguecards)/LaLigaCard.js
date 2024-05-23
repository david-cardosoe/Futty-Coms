import React from 'react'

const LaLigaCard = () => {
  return (
    <div className="card card-compact w-56 h-48 bg-base-100 image-full hover:bg-gray-500">
        <figure><img src="/laliga.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">La Liga</h2>
            <p>Check out La Liga matches being played!</p>
        </div>
    </div>
  )
}

export default LaLigaCard