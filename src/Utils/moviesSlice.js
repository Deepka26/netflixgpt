import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies=action.payload
        },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload
            },
            
            addTrendingMovies:(state,action)=>{
                state.trendingMovies=action.payload
            },

        }
    }
)
export const {addNowPlayingMovies,addPopularMovies,addTrendingMovies}=moviesSlice.actions

export default moviesSlice.reducer;