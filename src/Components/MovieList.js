import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
   console.log(movies,"movies")
   if(movies===null) return null;
  return (
    <div className='w-full'>
        <div className=' pl-4 '>
            <h1 className='text-2xl font-semibold'>
                {title}
            </h1>
        </div>
        <div className='flex overflow-x-scroll w-[100vw]  '>
        <div className='flex gap-4 m-4 pt-4 '>
            {
               movies && movies.map((item)=>{
                    return  <MovieCard key={item.id} posterPath={item.poster_path}/>
                })
            }
           
        </div>
        </div>
       
    
    </div>
  )
}

export default MovieList
