import React from 'react'

const MLSCard = ({ curLeague }) => {

  const curBackColor = {
    true: 'bg-mlsColor',
    false: 'bg-base-100'
  }

  let setBgColor = false;

  if (curLeague == "MLS") {
    setBgColor = true;
  } else {
    setBgColor = false
  }

  return (
    <div className={`card card-compact w-56 h-48 ${curBackColor[setBgColor]} image-full hover:bg-mlsColor`}>
        <figure><img src="/mls.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">MLS</h2>
            <p>Check out MLS matches being played!</p>
        </div>
    </div>
  )
}

export default MLSCard