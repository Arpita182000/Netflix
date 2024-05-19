import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovieMovie } from "../utils/movieSlice";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.movie.SearchMovie);
  const inputValue = useSelector((store) => store.gpt.inputValue);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&s=${inputValue}&apikey=f72fcd9b`
      );
      const data = await response.json();
      dispatch(addSearchMovieMovie(data.Search)); // Assuming data.Search contains an array of search results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchData();
    }
  }, [inputValue, dispatch]);

  if (!data) return <h1>Loading...</h1>;
  
  return (
    <div>
      <h1 className="text-white text-xl">Search Results</h1>
      <div className="flex flex-wrap">
        {data.map((movie, index) => (
          <img
            key={index}
            alt={`Movie poster ${index}`}
            className="rounded-lg w-[250px] h-[350px] m-2"
            src={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
