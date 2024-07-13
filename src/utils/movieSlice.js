import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
        popularMovies: null,
        TopRated: null,
        UpcomingMovies: null,
        credits:null,
        movieInfo:null,
        genreList:null,
        recommendations:null,
        WatchProviders:null,
        Images:null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.TrailerVideo = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        
        addTopRated: (state, action)=>{
            state.TopRated = action.payload; 
        },
        
        addUpcomingMovies: (state, action)=>{
            state.UpcomingMovies = action.payload;
        },
        addCredits:(state, action)=>{
            state.credits = action.payload;
        },
        addMovieInfo:(state, action)=>{
            state.movieInfo = action.payload;
        },
        addMovieGenre:(state, action)=>{
            state.genreList = action.payload;
        },
        addRecommendtaions:(state, action)=>{
            state.recommendations = action.payload;
        },
        addWatchProviders:(state, action)=>{
            state.WatchProviders = action.payload;
        },
        addImages:(state, action)=>{
            state.Images = action.payload;
        },
        
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcomingMovies, addCredits, addMovieInfo, addMovieGenre, addRecommendtaions, addWatchProviders, addImages} = movieSlice.actions;

export default movieSlice.reducer;