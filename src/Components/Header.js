import React from 'react'
import netflixLogo from "../Components/Assets/netlixlogo.png"
import netfliUserImage from "../Components/Assets/netflixUserIcon.png"
import { getAuth, signOut } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import {removeUser} from "../Utils/UserSlice"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
 const navigate=useNavigate()
 const user=useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <img src={netflixLogo} alt="netflixlogo" className=' relative w-40 h-32 bottom-4 ' />

     {user && <div className='flex gap-3 items-center mb-8 mr-5'>
        <img src={netfliUserImage} className='w-10 h-10' alt="netflixUserImage" />
        <button type="button" className='text-white font-semibold' onClick={()=>{handleSignOut()}}>Sign Out</button>
      </div>}
    </div>

  )
}

export default Header
