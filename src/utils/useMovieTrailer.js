import { APi_options } from "../utils/Constance";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ id }) => {
  const trailerVideo = useSelector(store=>store.movie.trailerVideo)
  const dispatch = useDispatch();

  const GetData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/866398/videos?",
      APi_options
    );
    const json = await data.json();
    const filterData = json.results?.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   !trailerVideo && GetData();
  }, []);
};

export default useMovieTrailer;
