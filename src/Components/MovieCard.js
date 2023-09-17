import React from 'react'
import { POSTER_CDN_URL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 h-full '>
      <img src={POSTER_CDN_URL+posterPath} alt="moviePosterPhoto" />
    </div>
  )
}

export default MovieCard
