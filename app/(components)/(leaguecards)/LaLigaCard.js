import React from 'react'

const LaLigaCard = ({ curLeague }) => {

  const curBackColor = {
    true: 'bg-laligaColor',
    false: 'bg-base-100'
  }

  let setBgColor = false;

  if (curLeague == "La Liga") {
    setBgColor = true;
  } else {
    setBgColor = false
  }

  return (
    <div className={`card card-compact w-56 h-48 ${curBackColor[setBgColor]} image-full hover:bg-laligaColor`}>
        <figure><img src="/laliga.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">La Liga</h2>
            <p>Check out La Liga matches being played!</p>
        </div>
    </div>
  )
}

export default LaLigaCard