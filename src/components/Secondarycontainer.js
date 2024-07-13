

import { useSelector } from "react-redux";
import MovieCard from "./movieCard";
import MovieList from "./movieList";
const SecondaryContainer = () =>{
    const movies = useSelector((store)=>store.movies)
    const movieslist = movies.nowPlayingMovies;
    
    
    const popularList = movies.popularMovies;
    const TopRated = movies.TopRated;
    const upcoming = movies.UpcomingMovies;
    return <div className="bg-black" >
        <div className="-mt-52 relative z-20">
         <MovieList title={"Now Playing"} movies = {movieslist} />
     
     <MovieList title={"Upcoming Movies"} movies = {upcoming} />
     <MovieList title={"Top Rated"} movies = {TopRated} />
     <MovieCard/>   
        </div>
     
    </div>
};

export default SecondaryContainer;