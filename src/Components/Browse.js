import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/moviesSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Utils/Hooks/usePopularMovies'
import useTrendingMovies from '../Utils/Hooks/UseTrendingMovies'

const Browse = () => {
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
     <MainContainer/>
     <SecondaryContainer/>
     
    </div>
  )
}

export default Browse
