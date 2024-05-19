import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideo:null,
        topRatedrVideo:null,
        SearchMovie:null
     },
     reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
      addPopularMovies:(state,action)=>{
        state.popularVideo=action.payload
      },
      addTopratedMovie:(state,action)=>{
        state.topRatedrVideo=action.payload
      },
      addSearchMovieMovie:(state,action)=>{
        state.SearchMovie=action.payload
      }
    }
})


export const {addMovies,addTrailerVideo,addPopularMovies,addTopratedMovie,addSearchMovieMovie} = movieSlice.actions;
export default movieSlice.reducer;