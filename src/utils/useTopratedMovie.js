
import {  addTopratedMovie } from "./movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { APi_options} from './Constance'
import { useEffect } from "react";
const useTopratedMovie = ()=>{
  // const topRatedrVideo = useSelector(store=>store.movie.topRatedrVideo)
  //   const dispatch=useDispatch();
  //   const getNowMoview = async()=>{
  //     const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APi_options);
  //     const json =await data.json();
  //     dispatch(addTopratedMovie(json.results))
      
  //   }
  
  //   useEffect(()=>{
  //    !topRatedrVideo && getNowMoview();
  //   },[])
}
export default useTopratedMovie;