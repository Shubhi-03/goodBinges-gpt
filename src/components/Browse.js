
import Header from "./Header";
 
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./gptSearch";

const Browse = () =>{
    const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

    console.log(showGptSearch);
    useNowPlayingMovies();
    useTopRated();
    useUpcomingMovies();

    
    return (<div>
        
        <Header/>
        {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
    )
}

export default Browse;