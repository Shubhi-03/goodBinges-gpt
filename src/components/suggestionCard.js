// import { useSelector } from "react-redux";
// import { IMG_CDN_URL } from "../utils/constants";
// const SuggestionCard = (Info) =>{
//     const genreNames = useSelector((store)=>store.movies.genreList);
//     return <>
//     <div className=" flex w-80% h-40%">
//          <div className="poster w-33%">
//          <img src = {IMG_CDN_URL+Info.poster_path}
//         alt = {Info.title}/>
//          </div>
//          <div className="content">
//             <h3>{Info.title}</h3>
//             <div>Genre:{genreNames?.filter(name => name !== '').join(' ')}</div>
//             <button className="bg-gray-400 text-black m-3 py-1 px-3 rounded-md">More Info</button>

//          </div>
//     </div>
//     </>
// }

// export default SuggestionCard;
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieGenre from "../hooks/useMovieGenre";
import useMovieCredit from "../hooks/usemovieCredit";

const SuggestionCard = ({ Info }) => {
   

  
  

  return (
    <div className="flex space around w-full  mb-4 items-center border border-gray-500">
      <div className="poster   h-25%  ">
        <img
          src={IMG_CDN_URL + Info?.poster_path}
          alt={Info?.title}
          className=" w-48 h-auto object-cover p-2"
        />
      </div>
      <div className="content w-1/3 pl-4">
        <div className="text-5xl font-medium mb-2">{Info?.original_title} </div>
        <div className="text-sm">{Info?.release_date.substring(0,4)} | {Info?.vote_average} | {Info?.original_language}</div>
      </div>
    </div>
  );
};

export default SuggestionCard;
