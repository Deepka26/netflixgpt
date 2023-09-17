import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const TrailerContainer = ({ movieId }) => {
    const [trailerKey,setTrailerKey]=useState(null)
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+ "/videos",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const filteredData = response?.results?.filter(
          (video) => video.type === "Trailer"
        );
       
        const trailer =response.results.filter((video)=>video.type==="Trailer")
         
           setTrailerKey(trailer[0]?.key)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-scrren relative z-0">
      <iframe
        src={"https://www.youtube.com/embed/"+trailerKey+"?&autoplay=1&mute=1"}
        className="w-screen h-screen"
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerContainer;
