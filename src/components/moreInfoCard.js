import { IMG_CDN_URL } from "../utils/constants";
import MovieCard from "./movieCard";
import MovieList from "./movieList";

const MoreInfoCard = ({Info, WatchProviders, credits, recommendations})=>{
return <>
<div className=" pt-20 pb-14 px-6  bg-black text-white bg-opacity-75">
      <h1 className="text-6xl font-extrabold text-wrap text-center mb-2">{Info?.title}</h1>
      <div className="text-center mb-12 border-b border-white pb-8">{Info?.genres?.map((genre) => genre.name).join(", ")} |  {Info.original_language} | {Info.release_date}</div>
     
      <div className="flex  mr-6">
      <div className="w-1/3 flex justify-center items-center">
  <img className="w-75% h-auto" src={IMG_CDN_URL + Info?.poster_path} alt={Info.title} />
</div>
        <div className="w-1/2 ml-12">
         <div className="flex-col  space-y-12">
         <div className=" text-lg ">
          <p className="text-justify">{Info.overview}</p></div>
          <div className=" text-lg "><p className="text-lg font-bold">Where to watch: </p>
            {WatchProviders?.map(c=>c.provider_name).join(', ')}</div>
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
</>
}

export default MoreInfoCard;