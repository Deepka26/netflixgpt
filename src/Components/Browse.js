import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/moviesSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Utils/Hooks/usePopularMovies'
import useTrendingMovies from '../Utils/Hooks/UseTrendingMovies'
import GptSearch from './GptSearch'

const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
const dispatch=useDispatch()
  usePopularMovies()
  useTrendingMovies()
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
    .then(response => response.json())
    .then(response => {
      dispatch(addNowPlayingMovies(response.results))
    })
    .catch(err => console.error(err));
  },[])
  return (
    <div>
     <Header/>

    {showGptSearch ? <GptSearch/> :
    
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    } 
     
    
     
    </div>
  )
}

export default Browse
