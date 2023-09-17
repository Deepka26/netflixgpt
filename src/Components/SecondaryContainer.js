import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector(store=>store?.movies)
  
  return (
    <div className='bg-black w-[100vw]'>
        <div className='text-white w-full flex flex-col gap-10 '>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
        </div>
    
    </div>
  )
}

export default SecondaryContainer;
