
import {  addPopularMovies } from "./movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { APi_options} from './Constance'
import { useEffect } from "react";
const usePopularMovie = ()=>{
  // const popularMovie = useSelector(store=>store.movie.popularVideo)
  //   const dispatch=useDispatch();
  //   const getNowMoview = async()=>{
  //     const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', APi_options);
  //     const json =await data.json();
  //     dispatch(addPopularMovies(json.results))
      
  //   }
 
  //   useEffect(()=>{
  //   !popularMovie &&  getNowMoview();
  //   },[])

    
  //   if(!getNowMoview) return null;
  
}
export default usePopularMovie;