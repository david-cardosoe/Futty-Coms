import React from 'react'

const MLSCard = () => {
  return (
    <div>
        <button className='group'>
            <div className="card card-compact w-56 h-48 bg-base-100 image-full group-hover:bg-gray-500">
                <figure><img src="/mls.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center mt-8">MLS</h2>
                    <p>Check out MLS matches being played!</p>
                </div>
            </div>
        </button>
    </div>
  )
}

export default MLSCard