import React from 'react'

const LigaMXCard = () => {
  return (
    <div>
        <button className='group'>
            <div className="card card-compact w-56 h-48 bg-base-100 image-full group-hover:bg-gray-500">
                <figure><img src="/Liga_MX.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center mt-8">Liga MX</h2>
                    <p>Check out Liga MX matches being played!</p>
                </div>
            </div>
        </button>
    </div>
  )
}

export default LigaMXCard