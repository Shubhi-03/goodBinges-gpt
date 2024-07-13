import MoreInfo from "./moreInfo";
import MovieCard from "./movieCard";
import { Link } from "react-router-dom";

const MovieList = ({title, movies}) =>{
    
    return <div className="px-2">
     
            <h1 className="text-xl font-semibold px-6 py-2 text-white" >{title}</h1>

            <div className="flex  overflow-x-scroll">
                <div className="flex mx-2">
            {movies?.map((movie)=>
            (<Link to={"/" + movie.id+"/"+ movie.original_title}>
                <MovieCard key= {movie.id} PosterPath={movie.poster_path } title={movie.original_title} id = {movie.id}/>
               
                </Link>))}    
                </div>
                
                
            </div>
        </div>
    
};

export default MovieList;