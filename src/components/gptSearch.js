import GptMovieSuggestion from "./gptMovieSuggestion";
import GptSearchBar from "./gptSearchBar";
import background from '../utils/bg.jpg'

const GptSearch = () =>{
    return <div className="">
        <div className="fixed -z-10">
         <img className = " top-0 start-0 w-100 h-auto" src={background} alt="bg"/>   
        </div>
        <div>
         <GptSearchBar/>
        <GptMovieSuggestion/>   
        </div>
        
        
    </div>
}

export default GptSearch;