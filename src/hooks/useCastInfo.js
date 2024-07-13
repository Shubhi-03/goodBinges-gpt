import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCredits, addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useCastInfo = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieCredit = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/credits'
        , API_OPTIONS);
        const json = await data.json();
        dispatch(addCredits(json));
    }
    useEffect(()=>{
        getMovieCredit();
    }, []);
}
export default useCastInfo;