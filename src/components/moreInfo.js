import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieCredit from "../hooks/usemovieCredit";
import { useSelector } from "react-redux";
import usemovieInfo from "../hooks/useMovieInfo";
import background from '../utils/bg.jpg';
import Shimmer from "./Shimmer";
import MovieList from "./movieList";
import MovieCard from "./movieCard";
import useMovieGenre from "../hooks/useMovieGenre";
import useRecommenations from "../hooks/useRecommendations";
import useWatchProviders from "../hooks/useWatchProviders";
import useMovieImages from "../hooks/useMovieImages";


const MoreInfo = () =>{
  
  const { movieId, title } = useParams();
  
  useMovieCredit(movieId);
  usemovieInfo(title, movieId);
  useRecommenations(movieId);
  useWatchProviders(movieId);
  useMovieImages(movieId);
  const credits = useSelector((store) => store.movies.credits);
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  const recommendations = useSelector((store)=>store.movies.recommendations);
  const WatchProviders = useSelector((store)=>store.movies.WatchProviders);
  const Info = movieInfo ? movieInfo[0] : null;
  useMovieGenre(Info);
  const genre = useSelector((store)=>store.movies.genreList);
 
  const genreNames = Info?.genre_ids?.map(id => {
    const genreArray = genre?.genres?.find(genre => genre.id === id);
    return genreArray ? genreArray.name : '';
  });
console.log(WatchProviders?.US?.flatrate);
      return <div>
        
        <div className="fixed -z-10">
         <img className = " top-0 start-0 w-100 h-auto" src={background} alt="bg"/> 
          </div> 
         {Info === null?(
      
      <Shimmer/>
    ):(
      <div className=" pt-20 pb-14 px-6  bg-black text-white bg-opacity-75">
      <h1 className="text-6xl font-extrabold text-wrap text-center mb-2">{Info?.title}</h1>
      <div className="text-center mb-12 border-b border-white pb-8">{genreNames?.filter(name => name !== '').join(' ')} |  {Info.original_language} | {Info.release_date}</div>
     
      <div className="flex  mr-6">
      <div className="w-1/3 flex justify-center items-center">
  <img className="w-75% h-auto" src={IMG_CDN_URL + Info?.poster_path} alt={title} />
</div>
        <div className="w-1/2 ml-12">
         <div className="flex-col  space-y-12">
         <div className=" text-lg ">
          <p className="text-justify">{Info.overview}</p></div>
          <div className=" text-lg "><p className="text-lg font-bold">Where to watch: </p>
            {WatchProviders?.US?.flatrate?.map((c)=>c.provider_name).join(", ")}</div>
          <div>
        <button className="bg-white text-black m-3 py-1 px-3 rounded-md">Add to Favourites</button>
        <button className="bg-gray-400 text-black m-3 py-1 px-3 rounded-md">Add to WatchList</button>
     </div>
        </div> 
        </div>
        </div>
      <div className="px-2 my-14">
     
            <h1 className="text-xl font-semibold px-6 py-2 text-white" >Cast</h1>

            <div className="flex  overflow-x-scroll">
                <div className="flex mx-2">
            {credits?.cast?.map((cast)=>
            
                <MovieCard key= {cast.id} PosterPath={cast.profile_path } title={cast.name} id = {cast.id}/>
                )}    
                </div>
                
                
            </div>
        </div>
        <div>
        <MovieList title={"Also Watch"} movies = {recommendations} />

        </div>
    </div>


    )}
    </div>
}

export default MoreInfo;