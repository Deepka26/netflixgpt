import React,{useEffect} from 'react'
import { API_OPTIONS } from '../Constants';
import { useDispatch } from 'react-redux';
import {addTrendingMovies} from "../moviesSlice"

const useTrendingMovies = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response =>{
            dispatch(addTrendingMovies(response.results))
        })
        .catch(err => console.error(err));
    },[])
  
}

export default useTrendingMovies;
