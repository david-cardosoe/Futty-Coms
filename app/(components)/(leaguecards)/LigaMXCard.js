import React from 'react'

const LigaMXCard = ({ curLeague }) => {

  const curBackColor = {
    true: 'bg-ligamxColor',
    false: 'bg-base-100'
  }

  let setBgColor = false;

  if (curLeague == "Liga MX") {
    setBgColor = true;
  } else {
    setBgColor = false
  }

  return (
    <div className={`card card-compact w-56 h-48 ${curBackColor[setBgColor]} image-full hover:bg-ligamxColor`}>
        <figure><img src="/Liga_MX.png" alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="card-title justify-center mt-8">Liga MX</h2>
            <p>Check out Liga MX matches being played!</p>
        </div>
    </div>
  )
}

export default LigaMXCard