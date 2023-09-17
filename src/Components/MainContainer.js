import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillPlayFill } from "react-icons/bs";
import TrailerContainer from './TrailerContainer';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies )
    if(movies===null) return null;

    
const mainMovie=movies[0]
const {original_title,overview,id}=mainMovie;




  return (
    <>
    <div className='pt-[15rem] h-screen  absolute z-10 text-white  bg-gradient-to-r from-black'>
      <h1 className='font-bold px-14 text-2xl'>{original_title}</h1>
      <p className='py-6 text-lg  px-14 text-justify w-1/2'>{overview}</p>
      <div className='flex gap-3 mx-14 text-black '>
        
        <button type="button" className='bg-white hover:bg-gray-500 px-8 flex items-center  text-lg font-semibold py-2 rounded'><span><BsFillPlayFill sixe={18}/></span>Play</button>
        <button type="button" className='bg-gray-700 text-white px-8  text-lg font-semibold py-2 rounded'>More Info</button>
      </div>
     
    </div>
     <TrailerContainer movieId={id}/>
     </>
  )
}

export default MainContainer
