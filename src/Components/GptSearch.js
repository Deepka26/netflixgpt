import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import netflixbg from "./Assets/netflixbg.jpg"

const GptSearch = () => {
  return (
    <div>
 <div classname="">
       <img src={netflixbg} alt="netflixbg" className="object-cover absolute -z-50" />
       </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
   
   
  )
}

export default GptSearch
