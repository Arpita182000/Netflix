import React from "react";
import SecondaryMovieCard from "./SecondaryMovieCard";

const SecondaryMovieTitle = ({ movie, title }) => {
  if (movie === null) {
    return (
        <div className='bg-black p-3'>
        <div className='lg:mt-0 md:-mt-[16%] relative z-20 md:pl-12 pl-0  pb-8'>
        <div className="lg:px-6 md:0">
          <h1 className="text-3xl text-white  font-semibold py-8">{title}</h1>
          <div className="flex flex-wrap container py-5">
            <div><SecondaryMovieCard  /></div>

          </div>
        </div>
        </div>
        </div>
      );
    //   <div class="border-2">
    //     <SecondaryMovieCard />
    //   </div>
    // );
  }
  return (
    movie && (
      <div className="lg:px-6 md:0">
        <h1 className="text-3xl text-white  font-semibold py-8">{title}</h1>
        <div className="flex container py-5">
          {movie.map((v, i) => {
            if (!v.backdrop_path) return null;
            return (
              <div key={i}>
                <SecondaryMovieCard image={v.backdrop_path || v.poster_path} />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default SecondaryMovieTitle;
