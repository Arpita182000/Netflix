import React from 'react'
import SecondaryMovieTitle from './SecondaryMovieTitle'
import { useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movie = useSelector((store)=>store.movie)

  
  return (
    <>
    
    <div className='bg-black p-3 '>
      <div className='lg:mt-0 md:-mt-[16%] relative z-20 md:pl-12 pl-0  pb-8'>
      <SecondaryMovieTitle title={"Popular Movie"} movie={movie.nowPlayingMovies}/>
      <SecondaryMovieTitle title={"Trending Movie"} movie={movie.popularVideo}/>
      <SecondaryMovieTitle title={"Current Movie"} movie={movie.nowPlayingMovies}/>
      <SecondaryMovieTitle title={"Top Rated Movie"} movie={movie.topRatedrVideo}/>
      <SecondaryMovieTitle title={"Upcoming Movie"} movie={movie.popularVideo}/>
      </div>
    </div>
    </>
  )
}

export default SecondaryContainer