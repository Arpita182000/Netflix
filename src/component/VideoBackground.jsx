import React from "react";
import useMovieTrailer from "../utils/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ id }) => {

  const trailerData =  useSelector((store)=>store.movie?.trailerVideo)
  console.log(trailerData)
  useMovieTrailer({id});

  return <div className="w-[100%] ">
    <iframe className="w-[100%] aspect-video" src={"https://www.youtube.com/embed/"+trailerData?.key+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  </div>;
};

export default VideoBackground;
