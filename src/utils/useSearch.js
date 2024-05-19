
import { addMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { APi_options} from '../utils/Constance'
import { useEffect } from "react";

const useSearch = ()=>{
    // const inputValue = useSelector((store) => store.gpt.inputValue);
  
    // const dispatch=useDispatch();
    // const getNowMoview = async()=>{
    //   const data= await fetch( `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, APi_options);
    //   const json =await data.json();
    //   // console.log(json.results)
    //   dispatch(addMovies(json.results))
    // }
  
    // useEffect(()=>{
    //  !nowPlayingMovies && getNowMoview();
    // },[inputValue])
}
export default useSearch;