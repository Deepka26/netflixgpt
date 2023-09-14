import React from 'react'
import netflixLogo from "../Components/Assets/netlixlogo.png"
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
      <img src={netflixLogo} alt="netflixlogo" className=' relative w-40 h-32 bottom-4 ' />
    </div>
  )
}

export default Header
