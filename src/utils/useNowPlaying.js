
import { addMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { APi_options} from '../utils/Constance'
import { useEffect } from "react";

const useNowPlaying = ()=>{
  // const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies)
  //   const dispatch=useDispatch();
  //   const getNowMoview = async()=>{
  //     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', APi_options);
  //     const json =await data.json();
  //     // console.log(json.results)
  //     dispatch(addMovies(json.results))
  //   }
  
  //   useEffect(()=>{
  //    !nowPlayingMovies && getNowMoview();
  //   },[])
  //   if(!getNowMoview) return;
}
export default useNowPlaying;