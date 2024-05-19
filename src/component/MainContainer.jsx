import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movie = useSelector((store)=>store.movie?.nowPlayingMovies)


     if(movie === null) {
        return(
            <>
             <div className="w-full aspect-video  absolute bg-gradient-to-r from-black text-white ">
      <div className="md:w-10/12 lg:w-6/12  pt-[18%] pl-[4rem] pr-[7rem]">
        <h1 className="md:text-4xl  text-xl font-bold my-5 ">Iwájú </h1>
        <p className="text-lg mb-3 text-justify hidden md:block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus architecto nam laboriosam culpa id impedit ullam .
        </p>
        <div className="flex gap-5">
          <button className="bg-white hover:bg-opacity-80 px-12 py-2 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
            <img
              alt=""
              className="w-[12px]"
              src="https://toppng.com/uploads/thumbnail/video-play-comments-play-button-vhs-11562922969uh8eeheght.png"
            />
            <span className="text-black">Play</span>
          </button>

          <button className="bg-gray-500 px-10 p-2  bg-opacity-50  text-white text-lg font-semibold rounded-lg  hidden md:block">
            <div className="flex items-center justify-center gap-[15px]">
              <img
                alt=""
                className="w-6"
                src="https://nihalresidency.com/wp-content/plugins/nd-booking/templates/icon-info-grey.svg"
              />
              <span>More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="w-[100%] ">
    <iframe className="w-[100%] aspect-video" src={"https://www.youtube.com/embed/mB5efZKWIrU?si=6IGc2wVAVVX5kbAe&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  </div>

            </>
        )
     }
     
        const movieLink = movie[0];
        console.log(movieLink)
        
        const{id,original_title,overview}=movieLink;
        return (
            <>
             <VideoTitle title={original_title} overview={overview}  />
            <VideoBackground id={id}/>
           
            </>
        )
     }



export default MainContainer
