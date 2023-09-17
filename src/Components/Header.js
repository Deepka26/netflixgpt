import React,{useEffect} from 'react'
import netflixLogo from "../Components/Assets/netlixlogo.png"
import netfliUserImage from "../Components/Assets/netflixUserIcon.png"
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import {removeUser,addUser} from "../Utils/UserSlice"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const dispatch=useDispatch()
 const navigate=useNavigate()
 const user=useSelector(store=>store.user)
 

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
      

    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
       navigate("/browse")
        
      } else {
        // User is signed out
        dispatch(removeUser())
       navigate("/")
      }
    });
    return ()=>unsubscribe();
  },[])

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-20 flex justify-between'>
      <img src={netflixLogo} alt="netflixlogo" className=' relative  w-40 h-32 bottom-4 ' />

     {user && <div className='flex gap-3 items-center mb-8 mr-5'>
        <img src={netfliUserImage} className='w-10 h-10' alt="netflixUserImage" />
        <button type="button" className='text-white font-semibold' onClick={()=>{handleSignOut()}}>Sign Out</button>
      </div>}
    </div>

  )
}

export default Header
