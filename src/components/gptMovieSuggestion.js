import { useSelector } from "react-redux";
import SuggestionCard from "./suggestionCard";
import { Link } from "react-router-dom";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4  bg-black text-white bg-opacity-75 ">
      <div className="w-3/4 m-auto flex flex-col  justify-center p-2 my-4">
        {
          movieResults.map((movie)=> 
            (<Link to={"/" + movie?.id+"/"+ movie?.original_title}>

        <SuggestionCard Info={movie}/>
        </Link>))
        }
      </div>
    </div>
  );
};
export default GptMovieSuggestions;