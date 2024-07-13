import { useRef } from "react";
import { API_OPTIONS, OPEN_AI_key } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";



const GptSearchBar = () =>{
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const genAI = new GoogleGenerativeAI(OPEN_AI_key);
    const searchMovieTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        const arrData = json.results[0];
        return arrData;
    }
    const handleGPTSearchClick = async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        
        const prompt = "Act as movie recommendation system and suggest some movies based on the query :" + searchText.current.value + ", only suggest 15 movies, comma separated like the example result given ahead. Example result - A, B, C, D, E.";
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        const gptMovies = text.split(", "); 
        const data = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(data);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
      }
    
    return <div className="pt-[7%] pl-[20%] bg-black">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" className="m-2 p-2 rounded-md w-2/3" placeholder="What do you want to watch today?" ref={searchText}/>
            <button className="bg-amber-300 text-black px-3 py-2 font-bold rounded-md" onClick={handleGPTSearchClick}>Search</button>
        </form>
    </div>
}

export default GptSearchBar;